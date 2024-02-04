import { useReducer } from "react";
import { SidebarItem } from "../constants/enum";
import { IMovie } from "../typings";

const initialState = {
  sidebarSelectedItem: SidebarItem.TRENDING,
  favMovies: [],
};

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "SET_SIDEBAR_SELECTED_ITEM":
      return { ...state, sidebarSelectedItem: action.payload };
    case "SET_FAVORITE_MOVIES":
      return { ...state, favMovies: action.payload };
    default:
      return state;
  }
};

const useReducerActions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSidebarSelectedItem = (item: string) => {
    dispatch({ type: "SET_SIDEBAR_SELECTED_ITEM", payload: item });
  };

  const setFavMovies = (data: Array<IMovie>) => {
    dispatch({ type: "SET_FAVORITE_MOVIES", payload: data });
  };

  return {
    actions: {
      setSidebarSelectedItem,
      setFavMovies,
    },
    states: {
      ...state,
    },
  };
};

export default useReducerActions;
