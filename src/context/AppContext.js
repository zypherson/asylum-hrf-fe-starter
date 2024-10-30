import { createContext, useContext, useReducer } from 'react';
import { filterReducer } from './filterReducer.js';
import { vizReducer } from './vizReducer.js';

const AppContext = createContext({});

const defaultFilterReducer = {};
const defaultVizReducer = {};

const useAppContextProvider = () => {
  const [filterData, filterReducerDispatch] = useReducer(
    filterReducer,
    defaultFilterReducer,
    undefined
  );
  const [vizData, vizReducerDispatch] = useReducer(
    vizReducer,
    defaultVizReducer,
    undefined
  );

  return {};
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}