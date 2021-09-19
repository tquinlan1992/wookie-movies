import { configure, mount } from "enzyme";
import MovieDetails from "./MovieDetails";
import * as moviesApi from "../../api/movies";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { act } from "react-dom/test-utils";
import { Movie } from "../../api/movies";
import { MemoryRouter, Route } from "react-router-dom";
import { paths, toPaths } from "../routes/paths";

configure({ adapter: new Adapter() });

const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

function partialAs<Type>(input: Partial<Type>) {
  return input as Type;
}

test("render the  home  page", async () => {
  const movieDetailsToRender = partialAs<Movie>({
    title: "movie2",
    id: "movie2Id",
    poster: "movie2Poster",
    classification: "movie2Classification",
    released_on: new Date("1999").toString(),
    length: "movie2Length",
    director: ["director1", "director2"],
    cast: ["cast1", "cast2", "cast3"],
    overview: "movie2Overview",
  });
  const getMoviesSpy = jest.spyOn(moviesApi, "getMovies").mockReturnValue(
    Promise.resolve([
      partialAs<Movie>({
        id: "movie1Id",
      }),
      movieDetailsToRender,
      partialAs<Movie>({
        id: "movie3Id",
      }),
    ])
  );
  const MemoryRouterWrapper: React.FC = ({ children }) => (
    <MemoryRouter
      initialEntries={[
        toPaths.MOVIE_DETAILS({
          id: movieDetailsToRender.id,
          title: movieDetailsToRender.title,
        }),
      ]}
    >
      <Route path={paths.MOVIE_DETAILS}>{children}</Route>
    </MemoryRouter>
  );
  const wrapper = mount(
    <MemoryRouterWrapper>
      <MovieDetails />
    </MemoryRouterWrapper>
  );
  await waitForComponentToPaint(wrapper);
  expect(toJson(wrapper.find("MovieDetails"))).toMatchSnapshot();
  expect(getMoviesSpy).toHaveBeenCalled();
});
