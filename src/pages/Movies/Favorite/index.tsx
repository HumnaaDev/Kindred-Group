import { IMovie } from "../../../typings";
import { MovieCard, Layout } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../../store/storeContext";
import { useEffect } from "react";
import { SidebarItem } from "../../../constants/enum";
import { DEFAULT_FAV_MOVIES_KEY } from "../../../constants";
import { useLocalStorage } from "../../../utils/useLocalStorage";

export const FavoriteMovies = () => {
  const navigate = useNavigate();
  const { favMovies } = useLocalStorage(DEFAULT_FAV_MOVIES_KEY);
  const {
    actions: { setSidebarSelectedItem },
  } = useStoreContext();

  useEffect(() => {
    setSidebarSelectedItem(SidebarItem.FAVORITE);
  }, []);

  return (
    <Layout>
      {favMovies?.map((movie: IMovie, index: number) => (
        <MovieCard
          key={`movie-${movie.imdbID}-${index}`}
          movie={movie}
          onMovieClick={(title) => navigate(`/movie/${title}`)}
        />
      ))}
    </Layout>
  );
};
