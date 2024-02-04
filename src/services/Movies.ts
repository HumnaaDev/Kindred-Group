import { fetcher, logger } from "../api";
import { OMDB } from "../api";
import { IMovie, IMovieResponse } from "../typings";

export const Movies = {
  get: async (searchParam: string): Promise<Array<IMovie>> => {
    const response = await fetcher<IMovieResponse>(
      `${OMDB}/?s=${searchParam}&apikey=${process.env.REACT_APP_API_KEY}`,
      {
        method: "GET",
      },
    );

    if (!response.success) {
      logger.warn("no data recieved from service");
      return [];
    }
    return response.result.Search;
  },
};
