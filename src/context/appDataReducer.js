export const appDataReducer = (state, action) => {
  switch (action.type) {
    case 'One': {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
