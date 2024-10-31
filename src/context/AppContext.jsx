import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';

const AppContext = createContext({});

const fiscalEndPoint = 'https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary';
const citEndPoint = 'https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary';

const useAppContextProvider = () => {
  const [citizenshipResults, setCitizenshipResults] = useState([]);
  const [fiscalData, setFiscalData] = useState({});
  const [graphData, setGraphData] = useState({});

  const getFiscalData = async () => {
    const fiscalDataRes = await axios.get(fiscalEndPoint);

    if (fiscalDataRes.status !== 200) {
      alert('Error retrieving Citizenship Results.');
      return;
    }

    const fiscData = fiscalDataRes.data;
    if (fiscData) {
      setFiscalData(fiscData);
      return;
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
      setCitizenshipResults(citData);
      return;
    }
    alert('Unable to retrieve Citizenship Results.');
  };

  const updateQuery = () => {
    getFiscalData();
    getCitizenshipResults();
  };

  const clearQuery = () => {
    setCitizenshipResults([]);
    setFiscalData({});
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    setFiscalData(testData);
    setCitizenshipResults(testData.citizenshipResults);
  }, []);

  useEffect(() => {
    setGraphData({ ...fiscalData, citizenshipResults });
  }, [fiscalData, citizenshipResults]);

  return {
    graphData,
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