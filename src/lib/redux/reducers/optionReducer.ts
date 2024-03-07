import { defaultOption } from "../../config/defaultOpion";
import { OptionState } from "../../modal/option";

const INITIAL_STATE: OptionState[] = defaultOption;

const optionReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_OPTION":
      return [...state, action.payload];
    case "REMOVE_OPTION":
      if (state.length > 1) {
        const newState = state.filter(
          (option) => option.number !== action.payload
        );
        return newState.map((option, index) => ({
          ...option,
          number: index + 1,
        }));
      }
      return state;
    case "UPDATE_OPTION":
      return state.map((option) => {
        if (option.number === action.payload.number) {
          return {
            ...option,
            ...action.payload.fieldsToUpdate,
          };
        }
        return option;
      });

    default:
      return state;
  }
};

export default optionReducer;
