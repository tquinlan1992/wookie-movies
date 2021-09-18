import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies, Movie } from "../api/movies";
import MoviesList from "../components/MoviesList";
import SearchContext from "../searchContext";

const PageWrapper = styled.div`
  padding: 15px;
`;

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
