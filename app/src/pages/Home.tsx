import React, { useEffect, useState } from "react";
import { getMovies, Movie } from "../api/movies";

const ListMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <span key={movie.id}>{movie.title}</span>
    ))}
  </>
);

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      setMovies(await getMovies());
    };
    loadMovies();
  }, []);
  return (
    <div>
      <ListMovies movies={movies} />
    </div>
  );
};

export default Home;
