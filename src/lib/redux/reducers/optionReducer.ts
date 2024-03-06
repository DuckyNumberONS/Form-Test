import { OptionState } from "../../modal/option";

const INITIAL_STATE: OptionState[] = [
  {
    number: 1,
    title: "Single",
    subtitle: "Standaed price",
    label: "",
    quantity: 1,
    discountType: "None",
  },
  {
    number: 2,
    title: "Duo",
    subtitle: "Save 10%",
    label: "Popular",
    quantity: 2,
    discountType: "None",
  },
];

const optionReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_OPTION":
      return [...state, action.payload];
    case "REMOVE_OPTION":
      if (state.length > 1) {
        return state.filter((option) => option.number !== action.payload);
      }
      return state;
    default:
      return state;
  }
};

export default optionReducer;
