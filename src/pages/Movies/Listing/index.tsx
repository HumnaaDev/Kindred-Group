import { useCallback, useEffect, useState } from "react";
import { Movies } from "../../../services/Movies";
import { IMovie } from "../../../typings";
import { MovieCard, SearchInput, Layout } from "../../../components";
import { useNavigate } from "react-router-dom";
import { DEFAULT_SEARCH_PLACEHOLDER } from "../../../constants";
import { MOVIE_DETAIL } from "../../../router/paths";

export const MovieListing = () => {
  const navigate = useNavigate();
  const [movieTitle, setMovieTitle] = useState<string>(
    DEFAULT_SEARCH_PLACEHOLDER,
  );
  const [movies, setMovies] = useState<Array<IMovie>>([]);

  useEffect(() => {
    searchMovies(movieTitle);
  }, [movieTitle]);

  const searchMovies = useCallback(async (movieTitle: string) => {
    try {
      const data = await Movies.get(
        movieTitle?.length > 0 ? movieTitle : DEFAULT_SEARCH_PLACEHOLDER,
      );
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, []);

  return (
    <Layout>
      <SearchInput setMovieTitle={setMovieTitle} options={movies} />
      {movies?.map((movie, index) => (
        <MovieCard
          key={`movie-${movie.imdbID}-${index}`}
          movie={movie}
          onMovieClick={(title) => navigate(`${MOVIE_DETAIL}/${title}`)}
        />
      ))}
    </Layout>
  );
};
