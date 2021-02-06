import { DEFAULT_ACTION_RENAME_THIS } from "../../constants/actionTypes";

const initialState = {};

function gameReducer(state, action) {
  switch (action.type) {
    case DEFAULT_ACTION_RENAME_THIS: {
      const newState = { ...state };

      return newState;
    }
    default:
      return initialState;
  }
}

export default gameReducer;
