import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getMovies } from "./movies";

const mock = new MockAdapter(axios);

describe("getMovies", () => {
  describe("on success", () => {
    it("should return the movies", async () => {
      const mockGet = mock
        .onGet("/https://wookie.codesubmit.io/movies")
        .reply(200, {
          movies: [{ id: "movieId1", title: "movieTitle1" }],
        });
      const movies = await getMovies("search-value");
      expect(movies).toEqual([{ id: "movieId1", title: "movieTitle1" }]);
      expect(mockGet.history.get[0]).toMatchObject({
        headers: { Authorization: "Bearer Wookie2021" },
        params: {
          q: "search-value",
        },
      });
    });
  });
  describe("on fail", () => {
    it("should throw an error", async () => {
      mock.onGet("/https://wookie.codesubmit.io/movies").reply(500, {
        movies: [{ id: "movieId1", title: "movieTitle1" }],
      });

      await expect(getMovies("search-value")).rejects.toThrow(
        "Request failed with status code 500"
      );
    });
  });
});
