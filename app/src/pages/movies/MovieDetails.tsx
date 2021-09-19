import _ from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovies, Movie } from "../../api/movies";
import PageWrapper from "../../components/PageWrapper";

const Column1 = styled.div`
  width: 400px;
  margin: auto;
`;

const Column2 = styled.div`
  flex: 0 1 auto;
  flex-wrap: wrap;
`;

const MovieDetailsColumns = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Poster = styled.img`
  width: auto;
  height: auto;
  max-height: 500px;
  display: block;
  margin: auto;
  padding-right: 20px;
  @media (max-width: 800px) {
    padding-right: 0px;
    padding-bottom: 20px;
  }
`;

const Title = styled.div`
  padding-bottom: 30px;
  @media (max-width: 800px) {
    text-align: center;
  }
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

  if (!movieData) {
    return null;
  } else {
    return (
      <PageWrapper>
        <MovieDetailsColumns>
          <Column1>
            <Poster src={movieData.poster} alt="Poster" />
          </Column1>
          <Column2>
            <Title>
              MovieDetails: {movieData.title} ({movieData.classification})
            </Title>
            <div>
              <span>
                {new Date(movieData.released_on).getFullYear()} |{" "}
                {movieData.length} | {movieData.director}
              </span>
            </div>
            <div>
              <span>Cast: {movieData.cast.join(" ")}</span>
            </div>
            <div>
              <p>Movie Description: {movieData.overview}</p>
            </div>
          </Column2>
        </MovieDetailsColumns>
      </PageWrapper>
    );
  }
};

export default MovieDetails;
