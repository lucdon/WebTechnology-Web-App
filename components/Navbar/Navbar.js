import React from "react";
import {NavLink, Link} from "react-router-dom";
import Modal from "react-responsive-modal";
import {connect} from "react-redux";

import Navigation from "client";
import LoginModal from "LoginModal";
import {AuthActions} from "actions";

@connect((store) => {
    return {auth: store.auth, tasks: store.task.tasks};
})
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openLogin: false
        }
    }

    logout() {
        this.setState({openLogin: false});
        this.props.dispatch(AuthActions.logout(this.props.auth.id));
    }

    openLogin() {
        this.setState({openLogin: true});
    }

    closeLogin() {
        setTimeout(() => {
            this.setState({openLogin: false});
        }, 5);
    }

    render() {

        const isInPlanTool = location.pathname.includes("/plantool");
        const isLogin = this.props.auth.id !== "" && this.props.auth.token !== "";

        return (
            <div class="nav">
                <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <NavLink className="navbar-brand" exact to={Navigation}>
                        Plan App
                    </NavLink >

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <NavLink className="nav-link" exact to={Navigation}>
                                    Home
                                </NavLink >
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" isActive={() => isInPlanTool} to={Navigation + "plantool"}>
                                    Plan Tool
                                </NavLink >
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to={Navigation + "about"}>
                                    About
                                </NavLink >
                            </li>
                        </ul>

                        {isLogin ? <button type="button" class="btn btn-primary" onClick={this.logout.bind(this)}>Logout</button> : <button type="button" class="btn btn-primary" onClick={this.openLogin.bind(this)}>
                            Login
                            <Modal open={this.state.openLogin} onClose={this.closeLogin.bind(this)} little animationDuration={100}>
                                <LoginModal cancel={this.closeLogin.bind(this)} />
                            </Modal>
                        </button>}
                    </div>
                </nav>
            </div>
        );
    }
}