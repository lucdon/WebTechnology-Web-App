import React from "react";
import {AuthActions} from "actions";
import {connect} from "react-redux"

const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const usernamePattern = new RegExp(/^[a-zA-Z0-9]+$/);
const passwordPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

@connect((store) => {
    return {auth: store.auth};
})
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            check: "",
            creating: false,
            email: "",
            isCreate: false,
            password: "",
            username: ""
        }
    }

    componentDidUpdate() {
        if (this.state.isCreate) {
            if (this.state.creating) {
                if (this.props.auth.response != null) {
                    if (this.props.auth.response === "success") {
                        this.toLogin();
                    }
                }
            }
        }
    }

    usernameChange(e) {
        this.setState({creating: false, username: e.target.value});
    }

    passwordChange(e) {
        this.setState({creating: false, password: e.target.value});
    }

    emailChange(e) {
        this.setState({creating: false, email: e.target.value});
    }

    login(e) {
        const {username, password} = this.state;
        this.props.dispatch(AuthActions.login(username, password));
    }

    createAccount(e) {
        const {email, username, password} = this.state;
        if (username.length < 4 || username.length > 16) {
            this.setState({check: "username must be between 4-16 characters!"});
        } else if (password.length < 8) {
            this.setState({check: "password must be atleast 8 characters!"});
        } else if (!emailPattern.test(email)) {
            this.setState({check: "email is invalid!"});
        } else if (!usernamePattern.test(username)) {
            this.setState({check: "username may only contain letters and digits!"});
        } else if (!passwordPattern.test(password)) {
            this.setState({check: "password should contain at least one digit, at least one lower case, at least one upper case"});
        } else {
            this.setState({check: ""});
            this.props.dispatch(AuthActions.createAccount(username, password));
            this.setState({creating: true});
        }
    }

    toCreateAccount(e) {
        this.setState({
            check: "",
            creating: false,
            email: "",
            isCreate: true,
            password: "",
            username: ""
        });
    }

    toLogin(e) {
        this.setState({
            check: "",
            creating: false,
            email: "",
            isCreate: false,
            password: "",
            username: ""
        });
    }

    render() {
        const {auth} = this.props;
        if (auth.fetching) {
            return (
                <div>Loading...</div>
            );
        }

        if (this.state.isCreate) {
            return (
                <div>
                    <div>
                        {auth.response != null ? auth.response === "success" ? <div class="alert alert-success" role="alert">
                            {auth.response}
                        </div> : <div class="alert alert-danger" role="alert">
                            {auth.response}
                        </div> : ""}
                        {this.state.check !== "" ? <div class="alert alert-danger" role="alert">
                            {this.state.check}
                        </div> : ""}
                        <h4>
                            Create Account:
                        </h4>
                        <label class="label">
                            Username:
                        </label>
                        <br />
                        <input type="text" value={this.state.username} onChange={this.usernameChange.bind(this)} />
                        <br />

                        <label class="label">
                            Email:
                        </label>
                        <br />
                        <input type="text" value={this.state.email} onChange={this.emailChange.bind(this)} />
                        <br />

                        <label class="label">
                            Password:
                        </label>
                        <br />
                        <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                    </div>
                    <div>
                        <button type="button" class="btn btn-success space" onClick={this.createAccount.bind(this)}>Create Account</button>
                        <button type="button" class="btn btn-danger" onClick={this.props.cancel.bind(this)}>Cancel</button>
                    </div>
                    <p>Or...</p>
                    <div>
                        <button type="button" class="btn btn-info" onClick={this.toLogin.bind(this)}>Login To Account</button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div>
                    {auth.response != null ? auth.response === "success" ? <div class="alert alert-success" role="alert">
                        {auth.response}
                    </div> : <div class="alert alert-danger" role="alert">
                        {auth.response}
                    </div> : ""}
                    {this.state.check !== "" ? <div class="alert alert-danger" role="alert">
                        {this.state.check}
                    </div> : ""}
                    <h4>
                        Login:
                    </h4>
                    <label class="label">
                        Username:
                    </label>
                    <br />
                    <input type="text" value={this.state.username} onChange={this.usernameChange.bind(this)} />
                    <br />

                    <label class="label">
                        Password:
                    </label>
                    <br />
                    <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                </div>
                <div>
                    <button type="button" class="btn btn-success space" onClick={this.login.bind(this)}>Login</button>
                    <button type="button" class="btn btn-danger" onClick={this.props.cancel.bind(this)}>Cancel</button>
                </div>
                <p>Or...</p>
                <div>
                    <button type="button" class="btn btn-info" onClick={this.toCreateAccount.bind(this)}>Create New Account</button>
                </div>
            </div>
        );
    }
}