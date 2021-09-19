import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies, Movie } from "../../api/movies";
import PageWrapper from "../../components/PageWrapper";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const MovieDetailsColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const MovieDetails: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const [movieData, setMovieData] = useState<Movie>();
  useEffect(() => {
    const retriveMovie = async () => {
      console.log("title", title);
      const strippedTitle = _.chain(title.toLowerCase())
        .replace("the", "")
        .replace("all", "")
        .replace("a ", "  ")
        .value();
      console.log("strippedTitle", strippedTitle);
      const result = await getMovies(strippedTitle);
      setMovieData(result[0]);
    };
    retriveMovie();
  }, [title]);
  return (
    <PageWrapper>
      <MovieDetailsColumns>
        <Column>
          <img src={movieData?.poster} alt="Poster" />
        </Column>
        <Column>MovieDetails: {movieData?.title}</Column>
      </MovieDetailsColumns>
    </PageWrapper>
  );
};

export default MovieDetails;
