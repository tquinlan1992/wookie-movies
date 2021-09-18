import { configure, mount } from "enzyme";
import App from "./App";
import * as moviesApi from "./api/movies";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

const waitForComponentToPaint = async (wrapper: any) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });
};

test("List movie titles", async () => {
  const getMoviesSpy = jest
    .spyOn(moviesApi, "getMovies")
    .mockReturnValue(
      Promise.resolve([{ title: "movie1", id: "movie1Id" } as moviesApi.Movie])
    );
  const wrapper = mount(<App />);
  await waitForComponentToPaint(wrapper);
  expect(toJson(wrapper)).toMatchSnapshot();
  expect(getMoviesSpy).toHaveBeenCalled();
});
