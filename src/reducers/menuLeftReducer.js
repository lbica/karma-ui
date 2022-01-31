import { GET_ENVIRONMENTITEMS } from "../actions/types";

const intialState = {
  environmentitems: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_ENVIRONMENTITEMS:
      return {
        ...state,
        environmentitems: action.payload
      };

    default:
      return state;
  }
}
