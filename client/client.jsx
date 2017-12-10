import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import Router from "./router.jsx";
import store from "./store.jsx";

const app = document.getElementById('app');

// Production:
//const Navigation = location.pathname;

// Development:
const Navigation = "/"

export default Navigation;

ReactDOM.render(
    <Provider store={store}>
    <Router />
</Provider>, app);