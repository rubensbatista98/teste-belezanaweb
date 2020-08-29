import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
} from "./actionTypes";

export default {
  getCartSuccess: (cart) => ({
    type: GET_CART_SUCCESS,
    payload: { cart },
  }),
  getCartRequest: (apiUrl) => ({
    type: GET_CART_REQUEST,
    payload: { apiUrl },
  }),
  getCartFailure: () => ({
    type: GET_CART_FAILURE,
  }),
};
