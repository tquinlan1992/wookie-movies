import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getMovies } from "./movies";

const mock = new MockAdapter(axios);

describe("getMovies", () => {
  it("should return the movies", async () => {
    const mockGet = mock
      .onGet("/https://wookie.codesubmit.io/movies?q=")
      .reply(200, {
        movies: [{ id: "movieId1", title: "movieTitle1" }],
      });
    const movies = await getMovies();
    expect(movies).toEqual([{ id: "movieId1", title: "movieTitle1" }]);
    expect(mockGet.history.get[0]).toMatchObject({
      headers: { Authorization: "Bearer Wookie2021" },
    });
  });
});
