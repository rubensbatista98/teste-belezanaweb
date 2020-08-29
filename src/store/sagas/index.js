import { all } from "redux-saga/effects";
import cart from "./cart";

function* sagas() {
  yield all([cart]);
}

export default sagas;
