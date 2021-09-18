import _ from "lodash";
import React from "react";
import { Movie } from "../../api/movies";

const groupMoviesByGenre = (movies: Movie[]) =>
  movies.reduce<{ [key: string]: Movie[] }>((result, movie) => {
    movie.genres.forEach((genre) => {
      result[genre] = result[genre] ? [...result[genre], movie] : [movie];
    });
    return result;
  }, {});

const ListMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const moviesGroupedByGenre = groupMoviesByGenre(movies);
  return (
    <>
      {_.map(moviesGroupedByGenre, (moviesInGenre, genre) => {
        return (
          <React.Fragment key={`genre-${genre}`}>
            <h3>{genre}</h3>
            {moviesInGenre.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListMovies;
