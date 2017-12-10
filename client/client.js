import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import Router from "./router.jsx";
import store from "./store.jsx";

const app = document.getElementById('app');

var Navigation;

if(location.hostname === "localhost"){
    Navigation = "/";
} else {
    Navigation = location.pathname;
}

export default Navigation;

ReactDOM.render(
    <Provider store={store}>
    <Router />
</Provider>, app);