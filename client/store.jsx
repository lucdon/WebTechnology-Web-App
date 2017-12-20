import {applyMiddleware, createStore} from "redux";

import {createLogger} from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

var middleware;

if (location.hostname === "localhost") {
    middleware = applyMiddleware(promise(), thunk, createLogger());
} else {
    middleware = applyMiddleware(promise(), thunk);
}
export default createStore(reducer, middleware);