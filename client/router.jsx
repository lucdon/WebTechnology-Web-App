import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "client";
import Home from "Home";

export default class Router extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path={Navigation} render={() => <Home/>}></Route>
                </BrowserRouter>
            </div>
        );
    }
}