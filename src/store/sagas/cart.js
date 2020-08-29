import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

import { GET_CART_REQUEST } from "../reducers/cart/actionTypes";
import cartActions from "../reducers/cart/actions";

function* getCartRequest(action) {
  try {
    const response = yield call(axios.get, action.payload.apiUrl);

    yield put(cartActions.getCartSuccess(response.data));
  } catch (error) {
    yield put(cartActions.getCartFailure());
  }
}

export default all([takeLatest(GET_CART_REQUEST, getCartRequest)]);
