import {combineReducers} from "redux";

import task from "./TaskReducer.jsx";
import auth from "./AuthReducer.jsx";

export default combineReducers({task, auth});