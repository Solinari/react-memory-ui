import {
  FLIP_CARD_FACE,
  UPDATE_GAME,
  SET_IS_UPDATING,
} from "../../constants/actionTypes";
import { initializeCards } from "../../helpers/helpers";

const initialState = {
  cards: initializeCards(),
  firstCard: null,
  secondCard: null,
  isUpdating: false,
};

function handleCardFlip(state, payload) {
  let cards = [...state.cards];

  const { cardId, isFlipped } = payload;

  cards[cardId] = { ...cards[cardId], isFlipped: !isFlipped };

  const newState = { ...state, cards };

  if (
    (newState.firstCard && newState.firstCard.cardId === cardId) ||
    (newState.secondCard && newState.secondCard.cardId === cardId)
  ) {
    newState.firstCard = null;
    newState.secondCard = null;
    return newState;
  }

  if (!newState.firstCard) {
    newState.firstCard = { ...cards[cardId], cardId };
    return newState;
  }

  if (newState.firstCard && !newState.secondCard) {
    newState.secondCard = { ...cards[cardId], cardId };
  }

  return newState;
}

function handleGameUpdate(state) {
  if (state.firstCard && state.secondCard) {
    let cards = [...state.cards];
    if (state.firstCard.value === state.secondCard.value) {
      cards[state.firstCard.cardId] = {
        ...cards[state.firstCard.cardId],
        isMatched: true,
      };
      cards[state.secondCard.cardId] = {
        ...cards[state.secondCard.cardId],
        isMatched: true,
      };
    }

    if (state.firstCard.value !== state.secondCard.value) {
      cards[state.firstCard.cardId] = {
        ...cards[state.firstCard.cardId],
        isFlipped: false,
      };
      cards[state.secondCard.cardId] = {
        ...cards[state.secondCard.cardId],
        isFlipped: false,
      };
    }

    const newState = {
      ...state,
      cards,
      firstCard: null,
      secondCard: null,
    };
    return newState;
  }

  return state;
}

function handleIsUpdating(state, payload) {
  const newState = { ...state, isUpdating: payload.isUpdating };
  return newState;
}

function gameReducer(state, action) {
  switch (action.type) {
    case FLIP_CARD_FACE: {
      return handleCardFlip(state, action.payload);
    }
    case UPDATE_GAME: {
      return handleGameUpdate(state);
    }
    case SET_IS_UPDATING: {
      return handleIsUpdating(state, action.payload);
    }
    default:
      return initialState;
  }
}

export default gameReducer;
