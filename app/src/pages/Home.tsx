import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies, Movie } from "../api/movies";
import MoviesList from "../components/MoviesList";

const PageWrapper = styled.div`
  padding: 15px;
`;

const Home: React.FC<{ search: string }> = ({ search }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
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
