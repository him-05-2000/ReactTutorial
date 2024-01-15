import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";
//here the state is right before action
//and action is what you want to accomplish
//reduce function will always return a state
const reducer = (state, action) => {
  console.log(action);
  if (action.type === CLEAR_LIST) {
    //by spreading state we keep all the attributes and overwrite the one we need to
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => {
      return person.id !== action.payload.id;
    });
    return { ...state, people: newPeople };
  }

  throw new Error(`No matching "${action.type}"-action type`);
};

export default reducer;
