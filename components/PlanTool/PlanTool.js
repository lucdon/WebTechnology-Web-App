import React from "react";
import {Redirect} from "react-router-dom";
import Modal from "react-responsive-modal";

import Navigation from "client";
import AccountModal from "AccountModal";

import {connect} from "react-redux"

import TaskOverview from "TaskOverview";

@connect((store) => {
    return {auth: store.auth};
})
export default class PlanTool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openLogin: false
        }
    }

    componentWillMount() {
        if (this.props.auth.id == "" && this.props.auth.token == "" && this.props.auth.response != 3) {
            this.openLogin();
        }
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
        if (this.props.auth.id == "" && this.props.auth.token == "" && this.props.auth.response != 3) {
            if (this.state.openLogin) {
                return (
                    <div>
                        <Modal open={this.state.openLogin} onClose={this.closeLogin.bind(this)} little animationDuration={100}>
                            <AccountModal cancel={this.closeLogin.bind(this)} />
                        </Modal>
                    </div>
                );
            } else {
                return (<Redirect to={Navigation} />);
            }
        }
        return (
            <div class="page">
                <TaskOverview />
            </div>
        );
    }
}