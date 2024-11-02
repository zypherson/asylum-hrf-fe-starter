import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const fiscalEndPoint = 'https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary';
const citEndPoint = 'https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary';

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    const fiscalDataRes = await axios.get(fiscalEndPoint);

    if (fiscalDataRes.status !== 200) {
      alert('Error retrieving Citizenship Results.');
      return;
    }

    const fiscData = fiscalDataRes.data;
    if (fiscData) {
      return fiscData;
    }
    alert('Unable to retrieve Fiscal Data.');
  };

  const getCitizenshipResults = async () => {
    const citizenshipRes = await axios.get(citEndPoint);

    if (citizenshipRes.status !== 200) {
      alert('Error retrieving Citizenship Results.');
      return;
    }
    const citData = citizenshipRes.data;
    if (citData) {
      return citData;
    }
    alert('Unable to retrieve Citizenship Results.');
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    const fiscData = await getFiscalData();
    const citizenshipResults = await getCitizenshipResults();
    setGraphData({ ...fiscData, citizenshipResults });
    setIsDataLoading(false);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
