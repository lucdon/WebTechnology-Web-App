import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./client.jsx";
import Home from "./../app/Home.jsx";

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
/*
                        <Route></Route>
                        <Route exact path={Navigation} component={Home}></Route>
                        <Route path={Navigation + "about"} component={About}></Route>
                        <Route></Route>
*/