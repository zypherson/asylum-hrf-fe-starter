import { createContext, useContext, useReducer } from 'react';
import { appDataReducer } from './appDataReducer.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [appData, appDataDispatch] = useReducer(appDataReducer, {});

  return { appData };
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