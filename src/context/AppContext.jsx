import { createContext, useContext, useEffect, useState } from 'react';
import testData from '../data/test_data.json';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [citizenshipResults, setCitizenshipResults] = useState([]);
  const [fiscalData, setFiscalData] = useState({});
  const [graphData, setGraphData] = useState({});

  const getFiscalData = async () => {
    // const fiscalDataRes = await axios.get(process.env.REACT_APP_API_URI);
    // if (fiscalDataRes[0]) {
    //   setFiscalData(fiscalDataRes[0]);
    //   return;
    // }

    if (testData) {
      setFiscalData(testData);
      return;
    }
    alert('Unable to retrieve Fiscal Data.');
  };

  const getCitizenshipResults = async () => {
    // const citizenshipRes = await axios.get(process.env.REACT_APP_API_URI);
    // if (citizenshipRes && Array.isArray(citizenshipRes)) {
    //   setCitizenshipResults(citizenshipRes);
    //   return;
    // }

    if (testData.citizenshipResults) {
      setCitizenshipResults(testData.citizenshipResults);
      return;
    }
    alert('Unable to retrieve Citizenship Results.');
  };

  const updateQuery = () => {
    Promise.all([getFiscalData(), getCitizenshipResults()]);
  };

  // const updateStateWithNewData = (years, view, office) => {
  //   /*
  //    |   Example request for once the `/summary` endpoint is up and running:           |
  //    |                                                                                 |
  //    |     `${url}/summary?to=2022&from=2015&office=ZLA`                               |
  //    |                                                                                 |
  //    |     so in axios we will say:                                                    |
  //    |                                                                                 |
  //    |       axios.get(`${url}/summary`, {                                             |
  //    |         params: {                                                               |
  //    |           from: <year_start>,                                                   |
  //    |           to: <year_end>,                                                       |
  //    |           office: <office>,       [ <-- this one is optional! when    ]         |
  //    |         },                        [ querying by `all offices` there's ]         |
  //    |       })                          [ no `office` param in the query    ]         |                                                                 _
  //    -- Mack
  //    */
  //
  //   if (office === 'all' || !office) {
  //     axios
  //       .get(process.env.REACT_APP_API_URI, {
  //         // mock URL, can be simply replaced by `${Real_Production_URL}/summary` in prod!
  //         params: { from: years[0], to: years[1] },
  //       })
  //       .then(result => {
  //         stateSettingFn(view, office, testData); // <-- `test_data` here can be simply replaced by `result.data` in prod!
  //       })
  //       .catch(err => console.error(err));
  //   } else {
  //     axios
  //       .get(process.env.REACT_APP_API_URI, {
  //         // mock URL, can be simply replaced by `${Real_Production_URL}/summary` in prod!
  //         params: { from: years[0], to: years[1], office: office },
  //       })
  //       .then(result => {
  //         stateSettingFn(view, office, testData); // <-- `test_data` here can be simply replaced by `result.data` in prod!
  //       })
  //       .catch(err => console.error(err));
  //   }
  // };

  const clearQuery = () => {
    setCitizenshipResults([]);
    setFiscalData({});
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

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