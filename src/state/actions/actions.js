import { FLIP_CARD_FACE, UPDATE_GAME } from "../../constants/actionTypes";

export const flipCardFace = (payload) => ({
  type: FLIP_CARD_FACE,
  payload,
});

export const updateGame = () => ({
  type: UPDATE_GAME,
});
