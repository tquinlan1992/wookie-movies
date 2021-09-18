import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getMovies, Movie } from "./api/movies";

const ListMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <span key={movie.id}>{movie.title}</span>
    ))}
  </>
);

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const loadMovies = async () => {
      setMovies(await getMovies());
    };
    loadMovies();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ListMovies movies={movies} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
