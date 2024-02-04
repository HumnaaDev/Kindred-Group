import { createContext, type FC, type ReactNode, useContext } from "react";
import { defaultStoreValues, type StoreContextType } from "./configs";
import useReducerActions from "./useReducersActions";

export const StoreContext = createContext<StoreContextType>(defaultStoreValues);

export const useStoreContext = (): StoreContextType => useContext(StoreContext);

export interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const { actions, states } = useReducerActions();
  return (
    <StoreContext.Provider
      value={{
        actions,
        states,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
