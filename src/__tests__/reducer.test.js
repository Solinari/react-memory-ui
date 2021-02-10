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

  it("should update the isUpdating variable", () => {
    testState = gameReducer(testState, {
      type: SET_IS_UPDATING,
      payload: { isUpdating: true },
    });

    expect(testState.isUpdating).toEqual(true);
  });
});
