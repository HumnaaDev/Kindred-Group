import { useEffect } from "react";
import { IMovie } from "../typings";
import { logger } from "../api";
import { useStoreContext } from "../store/storeContext";

export const useLocalStorage = (key: string) => {
  const {
    actions: { setFavMovies },
    states: { favMovies },
  } = useStoreContext();

  useEffect(() => {
    const data = getInitialValue(key);
    setFavMovies(data);
  }, []);

  const setValue = (value: Array<IMovie>) => {
    setFavMovies(value);
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return { favMovies, setValue };
};

export const getInitialValue = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const data = localStorage.getItem(key);
      if (!data) {
        return [];
      }
      const parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      logger.error(`Error parsing data`);
      return [];
    }
  }
};
