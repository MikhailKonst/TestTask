export const initialState = {
  historyList: [],
  result: null,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "RES":
      return { ...state, result: action.result, error: null };
    case "ERR":
      return { ...state, error: action.error };
    case "HIST":
      return {
        ...state,
        historyList: [action.historyList, ...state.historyList].slice(0, 5),
      };
    default:
      return state;
  }
};
