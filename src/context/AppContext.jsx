import { createContext, useContext, useReducer } from 'react';
import { initialVizState, vizReducer } from './reducers/vizReducer.js';
import { dataReducer, initialDataState } from './reducers/dataReducer.js';
import { filterReducer, initialFilterState } from './reducers/filterReducer.js';
import { SET_VISUALIZATION_DATA } from './actionTypes/index.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [data, dataDispatch] = useReducer(dataReducer, initialDataState, undefined);
  const [filterData, filterReducerDispatch] = useReducer(filterReducer, initialFilterState, undefined);
  const [vizData, vizReducerDispatch] = useReducer(vizReducer, initialVizState, undefined);

  /**
   * Consider breaking this down into separate actionCreator files if it becomes overly crowded!
   * Remember separation of concerns.
   * Import the action-types and export an action-creator function for each.
   * Each synchronous function should return an action object with a type and a payload -- these will be passed to the reducer.
   * Each asynchronous function should dispatch its action object (type/payload) to the reducer.
   */
  const setVisualizationData = (view, office, data) => vizReducerDispatch({ type: SET_VISUALIZATION_DATA, payload: { view, office, data } });

  const resetVisualizationQuery = (view, office) => vizReducerDispatch({ type: RESET_VISUALIZATION_QUERY, payload: { view, office } });

  const setHeatMapYears = (view, office, idx, year) => vizReducerDispatch({ type: SET_HEAT_MAP_YEARS, payload: { view, office, idx, year } });

  return {};
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}