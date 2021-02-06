import { DEFAULT_ACTION_RENAME_THIS } from "../../constants/actionTypes";

export const defaultActionRenameThis = (payload) => ({
  type: DEFAULT_ACTION_RENAME_THIS,
  payload: payload,
});
