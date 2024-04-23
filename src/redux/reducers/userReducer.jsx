import { act } from "react-dom/test-utils";
import { types } from "../types";

const initialState = {
  title: 0,
  text: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICK:
      return { ...state, title: state.title + 1 };
    default:
      return state;
  }
}
