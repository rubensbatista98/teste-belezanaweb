import { ADD_PAYMENT } from "./actionTypes";

export default {
  addPayment: (data) => ({
    type: ADD_PAYMENT,
    payload: { data },
  }),
};
