import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "client";

import Navbar from "Navbar";
import Home from "Home";
import About from "About";
import PlanTool from "PlanTool";
import Footer from "Footer";

export default class Routing extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path={Navigation} component={Navbar}></Route>
                        <Route exact path={Navigation} component={Home}></Route>
                        <Route path={Navigation + "about"} component={About}></Route>
                        <Route path={Navigation + "plantool"} component={PlanTool}></Route>
                        <Route path={Navigation} component={Footer}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}