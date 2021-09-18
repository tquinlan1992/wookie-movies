import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../api/movies";
import { toPaths } from "../../pages/routes/paths";

const groupMoviesByGenre = (movies: Movie[]) =>
  movies.reduce<{ [key: string]: Movie[] }>((result, movie) => {
    movie.genres.forEach((genre) => {
      result[genre] = result[genre] ? [...result[genre], movie] : [movie];
    });
    return result;
  }, {});

const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const moviesGroupedByGenre = groupMoviesByGenre(movies);
  return (
    <>
      {_.map(moviesGroupedByGenre, (moviesInGenre, genre) => {
        return (
          <React.Fragment key={`genre-${genre}`}>
            <h3>{genre}</h3>
            {moviesInGenre.map((movie) => (
              <Link
                to={toPaths.MOVIE_DETAILS({ id: movie.id, title: movie.title })}
                key={movie.id}
              >
                <p>{movie.title}</p>
              </Link>
            ))}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MoviesList;
