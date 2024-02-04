import { Action } from "../constants/enum";
import { IAction, IMovie } from "../typings";
import { isFavorite } from "./checkFavoriteStatus";

export const markFavorite = (
  favMovies: Array<IMovie>,
  value: IMovie,
  action: IAction,
) => {
  let tempData = [...favMovies];
  if (action === Action.ADD) {
    const isFav = isFavorite(favMovies, value);
    if (!isFav) {
      tempData.push(value);
    }
  } else {
    tempData = favMovies.filter((d: IMovie) => value.imdbID !== d.imdbID);
  }
  const newStateArray = Array.from(tempData);
  return newStateArray;
};
