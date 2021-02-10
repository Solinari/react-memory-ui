import {
  FLIP_CARD_FACE,
  UPDATE_GAME,
  SET_IS_UPDATING,
} from "../constants/actionTypes";
import gameReducer from "../state/reducers/gameReducer";

import { initializeCards } from "../helpers/helpers";

describe("Memory Game", () => {
  let testState = null;

  beforeEach(() => {
    testState = {
      cards: initializeCards(),
      firstCard: null,
      secondCard: null,
      isUpdating: false,
    };
  });

  afterEach(() => {
    testState = null;
  });

  it("Updating should update the isUpdating boolean", () => {
    testState = gameReducer(testState, {
      type: SET_IS_UPDATING,
      payload: { isUpdating: true },
    });

    expect(testState.isUpdating).toEqual(true);
  });

  it("Flipping a card should flip isFlipped boolean", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    expect(testState.cards[0].isFlipped).toEqual(true);

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: true },
    });

    expect(testState.cards[0].isFlipped).toEqual(false);
  });

  it("Flipping 2 cards should both set their flip state", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    expect(testState.cards[0].isFlipped).toEqual(true);

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 1, isFlipped: false },
    });

    expect(testState.cards[1].isFlipped).toEqual(true);
  });

  it("Flipping 1 card should be the first card", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    expect(testState.cards[0].value).toEqual(testState.firstCard.value);
  });

  it("Flipping the same card again should have first and second card be null", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: true },
    });

    expect(testState.firstCard).toEqual(null);
    expect(testState.secondCard).toEqual(null);
  });

  it("Flipping 2 cards should have the values in each of first and second card", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 1, isFlipped: false },
    });

    expect(testState.cards[0].value).toEqual(testState.firstCard.value);
    expect(testState.cards[1].value).toEqual(testState.secondCard.value);
  });

  it("Updating the game after 2 cards are added should always null the cards", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 1, isFlipped: false },
    });

    testState = gameReducer(testState, {
      type: UPDATE_GAME,
    });

    expect(testState.firstCard).toEqual(null);
    expect(testState.secondCard).toEqual(null);
  });

  it("Updating the game after matching cards correctly sets isMatched to true", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    const matchedId = testState.cards.findIndex(
      (c, i) =>
        i !== testState.firstCard.cardId &&
        c.value === testState.firstCard.value
    );

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: matchedId, isFlipped: false },
    });

    testState = gameReducer(testState, {
      type: UPDATE_GAME,
    });

    expect(testState.firstCard).toEqual(null);
    expect(testState.secondCard).toEqual(null);

    expect(testState.cards[0].isFlipped).toEqual(true);
    expect(testState.cards[0].isMatched).toEqual(true);
    expect(testState.cards[matchedId].isFlipped).toEqual(true);
    expect(testState.cards[matchedId].isMatched).toEqual(true);
  });

  it("Updating the game after non-matching cards sets isMatched, isFlipped to false", () => {
    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: 0, isFlipped: false },
    });

    const matchedId = testState.cards.findIndex(
      (c, i) =>
        i !== testState.firstCard.cardId &&
        c.value !== testState.firstCard.value
    );

    testState = gameReducer(testState, {
      type: FLIP_CARD_FACE,
      payload: { cardId: matchedId, isFlipped: false },
    });

    testState = gameReducer(testState, {
      type: UPDATE_GAME,
    });

    expect(testState.firstCard).toEqual(null);
    expect(testState.secondCard).toEqual(null);

    expect(testState.cards[0].isFlipped).toEqual(false);
    expect(testState.cards[0].isMatched).toEqual(false);
    expect(testState.cards[matchedId].isFlipped).toEqual(false);
    expect(testState.cards[matchedId].isMatched).toEqual(false);
  });
});
