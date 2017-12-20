import React from "react";
import Navigation from "client";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="home-page">
                <div class="home-page-img">
                <h1 class="home-page-title">The Ultimate Plan App</h1>
                    <img src={Navigation + "images/homePage3.jpg"}/>
                </div>
            </div>
        );
    }
}