import {
  FLIP_CARD_FACE,
  UPDATE_GAME,
  SET_IS_UPDATING,
} from "../../constants/actionTypes";

export const flipCardFace = (payload) => ({
  type: FLIP_CARD_FACE,
  payload,
});

export const updateGame = () => ({
  type: UPDATE_GAME,
});

export const setIsUpdating = (payload) => ({
  type: SET_IS_UPDATING,
  payload,
});
