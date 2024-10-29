import { createContext, useContext } from 'react';

const AppContext = createContext({});

const useAppContextProvider = () => {
  return {};
};

export function useMatchAndMemoryContext() {
  return useContext(AppContext);
}

export function ProvideMatchAndMemoryContext({ children }) {
  const contextValue = useAppContextProvider();
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}