import { IS_CARD_MATCH_FOUND } from "../../constants/actionTypes";

export const defaultActionRenameThis = (payload) => ({
  type: IS_CARD_MATCH_FOUND,
  payload: payload,
});
