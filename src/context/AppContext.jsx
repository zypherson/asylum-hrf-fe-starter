import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    try {
      const response = await axios.get('https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary');
      return response.data; 
    } catch (err) {
      console.error("Error fetching fiscal data:", err);
      setError(err);
      return null;
    }
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    try {
      const response = await axios.get('https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary');
      return response.data; 
    } catch (err) {
      console.error("Error fetching citizenship data:", err);
      setError(err);
      return [];
    }
  };

 

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    setIsDataLoading(true);
    try {
      const fiscalData = await getFiscalData();
      const citizenshipData = await getCitizenshipResults();

      if (fiscalData && citizenshipData.length > 0) {
        setGraphData({
          ...fiscalData, 
          citizenshipResults: citizenshipData, 
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsDataLoading(false);
    }
  };

 
  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);
  ;

  const clearQuery = () => {
    setGraphData(null);
    console.log('here')
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);
  ;

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
    error
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
