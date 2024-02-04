import { Action } from "./constants/enum";

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: number;
  Type: "movie" | "series" | "episode";
  Poster: string;
}

export interface IMovieResponse {
  Search: Array<IMovie>;
  totalResults: number;
  Response: boolean;
}

export type IAction = Action.ADD | Action.REMOVE;
