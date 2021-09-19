import { configure, mount } from "enzyme";
import MoviesList from "./";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Movie } from "../../api/movies";
import { BrowserRouter as Router } from "react-router-dom";

configure({ adapter: new Adapter() });

function partialAs<Type>(input: Partial<Type>) {
  return input as Type;
}

test("render movie titles", async () => {
  const movies = [
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
  ];
  const wrapper = mount(
    <Router>
      <MoviesList movies={movies} />
    </Router>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
