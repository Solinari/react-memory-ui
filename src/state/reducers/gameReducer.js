import { FLIP_CARD_FACE } from "../../constants/actionTypes";
import { initializeCards } from "../../helpers/helpers";

const initialState = {
  cards: initializeCards(),
};

function handleCardFlip(state, payload) {
  let cards = [...state.cards];

  const { cardId, isFlipped } = payload;

  cards[cardId] = { ...cards[cardId], isFlipped: !isFlipped };

  const newState = { ...state, cards };

  return newState;
}

function gameReducer(state, action) {
  switch (action.type) {
    case FLIP_CARD_FACE: {
      return handleCardFlip(state, action.payload);
    }
    default:
      return initialState;
  }
}

export default gameReducer;
