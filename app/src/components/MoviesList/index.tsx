import { Movie } from "../../api/movies";

export const ListMovies: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <span key={movie.id}>{movie.title}</span>
    ))}
  </>
);
