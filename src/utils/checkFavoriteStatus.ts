import { IMovie } from "../typings";

export const isFavorite = (favMovies: Array<IMovie>, movie: IMovie) => {
  return favMovies.find((fav: IMovie) => fav.imdbID === movie.imdbID)
    ? true
    : false;
};
