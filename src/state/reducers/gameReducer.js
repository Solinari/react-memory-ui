import { IS_CARD_MATCH_FOUND } from "../../constants/actionTypes";
import { initializeCards } from "../../helpers/helpers";

const initialState = {
  cards: initializeCards(),
};

function gameReducer(state, action) {
  switch (action.type) {
    case IS_CARD_MATCH_FOUND: {
      const newState = { ...state };

      return newState;
    }
    default:
      return initialState;
  }
}

export default gameReducer;
