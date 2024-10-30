/*
      ------------------------------------------------------

      NOTE ON ALL THE SWITCH STATEMENTS:

          Technically, for queries that don't have
        to do with citizenship, we COULD set the data
        in state for ALL the non-citizenship views between
        those years, since we get all the necessary data
        anyway, but I think it's more intuitive and
        convenient for the UI to be able to remember a
        DIFFERENT user query for each individual view.
        That way if, say, a researcher wants to see all
        the data by office just from 2017, and then they
        tab over to view all the data as a time series from
        2015-currentYear, and then they go back to the Office tab,
        their previous query won't be overwritten by the
        one they made in the different tab, and they'll
        be able to seamlessly resume.

            -- Labs Staff

      ------------------------------------------------------
*/
const currentYear = new Date().getFullYear();
export const initialVizReducerState = {
  timeSeriesAllData: {},
  timeSeriesAllYears: [2015, currentYear],
  officeHeatMapData: {},
  officeHeatMapYears: [2015, currentYear],
  citizenshipMapAllData: {},
  citizenshipMapAllYears: [2015, currentYear],
  offices: {
    'Los Angeles, CA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'San Francisco, CA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'New York, NY': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'Houston, TX': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'Chicago, IL': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'Newark, NJ': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'Arlington, VA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'Boston, MA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'Miami, FL': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
    'New Orleans, LA': {
      timeSeriesData: {},
      timeSeriesYears: [2015, currentYear],
      citizenshipMapData: {},
      citizenshipMapYears: [2015, currentYear],
    },
  },
};

export const vizReducer = (state, action) => {
  switch (action.type) {
    case 'One': {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
