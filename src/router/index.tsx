import { createBrowserRouter } from "react-router-dom";
import { MovieListing, MovieDetail } from "../pages";
import { NotFound } from "../pages/NotFound";
import { FavoriteMovies } from "../pages/Movies/Favorite";
import {
  FAVORITE_MOVIES,
  HOME_PAGE,
  MOVIE_DETAIL,
  NOT_FOUND,
  TRENDING_MOVIES,
} from "./paths";

export const router = createBrowserRouter([
  {
    path: HOME_PAGE,
    Component() {
      return <MovieListing />;
    },
  },
  {
    path: TRENDING_MOVIES,
    Component() {
      return <MovieListing />;
    },
  },
  {
    path: MOVIE_DETAIL,
    Component() {
      return <MovieListing />;
    },
  },
  {
    path: `${MOVIE_DETAIL}/:title`,
    Component() {
      return <MovieDetail />;
    },
  },
  {
    path: FAVORITE_MOVIES,
    Component() {
      return <FavoriteMovies />;
    },
  },
  {
    path: NOT_FOUND,
    Component() {
      return <NotFound />;
    },
  },
]);
