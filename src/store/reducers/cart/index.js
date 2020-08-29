import {
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
  GET_CART_FAILURE,
} from "./actionTypes";

const INITIAL_STATE = {
  items: [],
  subTotal: 0,
  shippingTotal: 0,
  discount: 0,
  total: 0,
  isLoading: false,
  error: false,
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return { ...action.payload.cart, isLoading: false, error: false };
    case GET_CART_REQUEST:
      return { ...state, isLoading: true };
    case GET_CART_FAILURE:
      return { ...state, error: true };
    default:
      return state;
  }
}

export default cart;
