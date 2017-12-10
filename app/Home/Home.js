import React from "react";
import {connect} from "react-redux"

import {Navigation} from "client";
import {UserActions} from "actions";

@connect((store) => {
    return {
      user: store.user.user
    };
  })
export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(UserActions.fetchUser());
    }

    render() {
        return (
            <div class="home-page">
                <div class="home-page-img">
                    <h1 class="home-page-title">{this.props.user[0]}</h1>
                </div>
            </div>
        );
    }
}