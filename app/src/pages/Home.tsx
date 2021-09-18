import React, { useEffect, useState } from "react";
import { getMovies, Movie } from "../api/movies";

const ListMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <span key={movie.id}>{movie.title}</span>
    ))}
  </>
);

const Home: React.FC<{ search: string }> = ({ search }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      setMovies(await getMovies(search));
    };
    loadMovies();
  }, [search]);
  return <ListMovies movies={movies} />;
};

export default Home;
