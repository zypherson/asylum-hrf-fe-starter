import { createContext, useContext, useReducer } from 'react';
import { initialVizState, vizReducer } from './reducers/vizReducer.js';
import dataReducer, { initialDataState } from './reducers/dataReducer.js';
import filterReducer from './reducers/filterReducer.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [data, dataDispatch] = useReducer(dataReducer, initialDataState, undefined);
  const [filterData, filterReducerDispatch] = useReducer(filterReducer, initialFilterState, undefined);
  const [vizData, vizReducerDispatch] = useReducer(vizReducer, initialVizState, undefined);

  return {};
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}