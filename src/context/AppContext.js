import { createContext, useContext, useReducer } from 'react';
import { filterReducer, initialFilterReducerState } from './filterReducer.js';
import { initialVizReducerState, vizReducer } from './vizReducer.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [filterData, filterReducerDispatch] = useReducer(filterReducer, initialFilterReducerState, undefined);
  const [vizData, vizReducerDispatch] = useReducer(vizReducer, initialVizReducerState, undefined);

  return {};
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}