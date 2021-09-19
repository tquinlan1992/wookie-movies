import React, { useContext, useEffect, useState } from "react";
import { getMovies, Movie } from "../api/movies";
import MoviesList from "../components/MoviesList";
import PageWrapper from "../components/PageWrapper";
import SearchContext from "../searchContext";

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    const loadMovies = async () => {
      setMovies(await getMovies(search));
    };
    loadMovies();
  }, [search]);
  return (
    <PageWrapper>
      <MoviesList movies={movies} />
    </PageWrapper>
  );
};

export default Home;
