import { OptionState } from "../../modal/option";

export const addOption = (option: OptionState) => ({
  type: "ADD_OPTION",
  payload: option,
});

export const removeOption = (number: number) => ({
  type: "REMOVE_OPTION",
  payload: number,
});
