import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {AuthActions} from "actions";

import Routing from "./routing.jsx";
import store from "./store.jsx";

const app = document.getElementById('app');

var Navigation;
var Address;

if (location.hostname === "localhost") {
    Navigation = "/";
    Address = "http://localhost:57028/";
} else {
    Navigation = location.pathname;
    Address = "https://www.lucstudent.nl/";
}

export {Address, Navigation};

ReactDOM.render(
    <Provider store={store}>
    <Routing />
</Provider>, app);