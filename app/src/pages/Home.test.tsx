import { configure, mount } from "enzyme";
import Home from "./Home";
import * as moviesApi from "../api/movies";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { act } from "react-dom/test-utils";
import { Movie } from "../api/movies";

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

test("List movie titles", async () => {
  const getMoviesSpy = jest.spyOn(moviesApi, "getMovies").mockReturnValue(
    Promise.resolve([
      partialAs<Movie>({
        title: "movie1",
        id: "movie1Id",
        genres: ["genre1", "genre2"],
      }),
      partialAs<Movie>({
        title: "movie2",
        id: "movie2Id",
        genres: ["genre3", "genre4"],
      }),
      partialAs<Movie>({
        title: "movie3",
        id: "movie3Id",
        genres: ["genre4", "genre5"],
      }),
    ])
  );
  const wrapper = mount(<Home />);
  await waitForComponentToPaint(wrapper);
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(getMoviesSpy).toHaveBeenCalled();
});
