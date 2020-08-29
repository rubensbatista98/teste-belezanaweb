import { ADD_PAYMENT } from "./actionTypes";

function payment(state = null, action) {
  switch (action.type) {
    case ADD_PAYMENT:
      return { ...action.payload.data };

    default:
      return state;
  }
}

export default payment;
