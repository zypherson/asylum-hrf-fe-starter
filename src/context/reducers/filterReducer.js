export const initialFilterReducerState = {
  cases: [],
  comparisonData: {
    //This will hold keys and values for default displays on the site landing page, similar to TRAC
  },
  filterCount: 0,
  filteredCases: [],
  displayAdvancedSearch: false,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'One': {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
