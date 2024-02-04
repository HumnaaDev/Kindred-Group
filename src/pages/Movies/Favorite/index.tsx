import { IMovie } from "../../../typings";
import { MovieCard, Layout } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../../../store/storeContext";
import { useEffect } from "react";
import { SidebarItem } from "../../../constants/enum";
import { DEFAULT_FAV_MOVIES_KEY } from "../../../constants";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { Box } from "@mui/material";

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
      {favMovies?.length > 0 ? favMovies?.map((movie: IMovie, index: number) => (
        <MovieCard
          key={`movie-${movie.imdbID}-${index}`}
          movie={movie}
          onMovieClick={(title) => navigate(`/movie/${title}`)}
        />
      )): <Box>🎬 Oops! Your favorite list is empty. Time to discover and add some movie magic! ✨🍿</Box>}
    </Layout>
  );
};
