import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "../../api/movies";
import { toPaths } from "../../pages/routes/paths";

const groupMoviesByGenre = (movies: Movie[]) =>
  movies.reduce<{ [key: string]: Movie[] }>((result, movie) => {
    movie.genres.forEach((genre) => {
      result[genre] = result[genre] ? [...result[genre], movie] : [movie];
    });
    return result;
  }, {});

const MovieDisplayImage = styled.img`
  padding-right: 10px;
`;

const MovieDisplay: React.FC<Pick<Movie, "id" | "title" | "poster">> = ({
  id,
  title,
  poster,
}) => (
  <Link to={toPaths.MOVIE_DETAILS({ id, title })}>
    <MovieDisplayImage src={poster} alt={"Movie Display"} />
  </Link>
);

const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const moviesGroupedByGenre = groupMoviesByGenre(movies);
  return (
    <>
      {_.map(moviesGroupedByGenre, (moviesInGenre, genre) => {
        return (
          <React.Fragment key={`genre-${genre}`}>
            <h3>{genre}</h3>
            {moviesInGenre.map((movie) => (
              <MovieDisplay
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
              />
            ))}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default MoviesList;
