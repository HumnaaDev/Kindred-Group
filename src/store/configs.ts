import { SidebarItem } from "../constants/enum";
import { IMovie } from "../typings";

export default interface IActions {
  payload: any;
  type: string;
}

export interface StoreContextType {
  states: {
    sidebarSelectedItem: string;
    favMovies: Array<IMovie>;
  };
  actions: {
    setSidebarSelectedItem: (data: string) => void;
    setFavMovies: (data: Array<IMovie>) => void;
  };
}

export const defaultStoreValues = {
  states: {
    sidebarSelectedItem: SidebarItem.TRENDING,
    favMovies: [],
  },
  actions: {
    setSidebarSelectedItem: (): void => {},
    setFavMovies: (): void => {},
  },
};
