import { combineReducers } from "redux";
import User from "./User/reducer";

const reducer = combineReducers({ user: User });

export default reducer;
