import { combineReducers } from "redux";

import cart from "./cart";
import payment from "./payment";

export default combineReducers({ cart, payment });
