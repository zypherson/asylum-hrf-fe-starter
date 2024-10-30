import {RESET_VISUALIZATION_QUERY, SET_HEAT_MAP_YEARS, SET_VISUALIZATION_DATA} from '../actionTypes';

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

const startingYear = 2015;
const currentYear = new Date().getFullYear();

const yearsArray = [startingYear, currentYear];

export const initialVizState = {
  timeSeriesAllData: {},
  timeSeriesAllYears: yearsArray,
  officeHeatMapData: {},
  officeHeatMapYears: yearsArray,
  citizenshipMapAllData: {},
  citizenshipMapAllYears: yearsArray,
  offices: {
    'Los Angeles, CA': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'San Francisco, CA': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'New York, NY': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'Houston, TX': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'Chicago, IL': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'Newark, NJ': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'Arlington, VA': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'Boston, MA': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'Miami, FL': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
    'New Orleans, LA': {
      timeSeriesData: {},
      timeSeriesYears: yearsArray,
      citizenshipMapData: {},
      citizenshipMapYears: yearsArray,
    },
  },
};

export const vizReducer = (state, action) => {
  let dataKey = '';
  const { offices } = state;
  const { office, view, data, year, idx } = action.payload;

  switch (action.type) {
    case RESET_VISUALIZATION_QUERY:
      if (!office) {
        const newState = { ...state, timeSeriesAllYears: yearsArray };

        switch (view) {
          case 'time-series':
            newState.timeSeriesAllData = {};
            return newState;
          case 'office-heat-map':
            newState.officeHeatMapData = {};
            return newState;
          case 'citizenship':
            newState.citizenshipMapAllData = {};
            return newState;
          default:
            return state;
        }
      } else {
        const newState = {
          ...state,
          offices: { ...offices, [office]: { ...offices[office] } },
        };

        switch (view) {
          case 'time-series':
            newState.offices[office].timeSeriesData = {};
            newState.offices[office].timeSeriesYears = yearsArray;
            return newState;
          case 'citizenship':
            newState.offices[office].citizenshipMapData = {};
            newState.offices[office].citizenshipMapYears = yearsArray;
            return newState;
          default:
            return state;
        }
      }
    case SET_VISUALIZATION_DATA:
      if (!office) {
        switch (view) {
          case 'time-series':
            dataKey = 'timeSeriesAllData';
            break;
          case 'office-heat-map':
            dataKey = 'officeHeatMapData';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapAllData';
            break;
          default:
            break;
        }
        return { ...state, [dataKey]: data };
      } else {
        switch (view) {
          case 'time-series':
            dataKey = 'timeSeriesData';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapData';
            break;
          default:
            break;
        }
        return {
          ...state,
          offices: {
            ...offices,
            [office]: { ...offices[office], [dataKey]: data },
          },
        };
      }
    case SET_HEAT_MAP_YEARS:
      if (!office) {
        switch (view) {
          case 'time-series':
            dataKey = 'timeSeriesAllYears';
            break;
          case 'office-heat-map':
            dataKey = 'officeHeatMapYears';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapAllYears';
            break;
          default:
            dataKey = 'timeSeriesAllYears';
            break;
        }
        return {
          ...state,
          [dataKey]: idx === 0 ? [year, state[dataKey][1]] : [state[dataKey][0], year],
        };
      } else {
        switch (view) {
          case 'time-series':
            dataKey = 'timeSeriesYears';
            break;
          case 'citizenship':
            dataKey = 'citizenshipMapYears';
            break;
          default:
            dataKey = 'timeSeriesYears';
            break;
        }
        return {
          ...state,
          offices: {
            ...offices,
            [office]: {
              ...offices[office],
              [dataKey]: idx === 0 ? [year, offices[office][dataKey][1]] : [offices[office][dataKey][0], year],
            },
          },
        };
      }
    default: {
      return state;
    }
  }
};
