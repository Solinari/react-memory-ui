import { FLIP_CARD_FACE } from "../../constants/actionTypes";

export const flipCardFace = (payload) => ({
  type: FLIP_CARD_FACE,
  payload,
});
