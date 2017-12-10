import React from "react";
import {Navigation} from "./../client";
import {UserActions} from "./../client/actions";

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: UserActions.fetchUser().payload
        };
    }

    render() {
        return (
            <div class="home-page">
                <div class="home-page-img">
                    <h1 class="home-page-title">{this.state.user.name}</h1>
                </div>
            </div>
        );
    }
}