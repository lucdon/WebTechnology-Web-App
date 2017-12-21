import React from "react";
import {Address} from "client";

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="api-page container">
                <div class="container">
                    <h3>API Info</h3>
                </div>
                <div class="container">
                    <h4>Get all users</h4>
                    <pre>
                        <code> {Address + "api/users/"} </code>
                    </pre>
                    <h5>Parameter</h5>
                    <p>The API call has no parameters</p>
                    <h5>Succes</h5>
                    <p>It returns a json array with all users which exist of:</p>
                    <ul>
                        <li>id</li>
                        <li>username</li>
                        <li>loginStatus</li>
                    </ul>
                    <h5>Error</h5>
                    <p>Returns a single string with the error</p>
                </div>
                <div class="container">
                    <h4>Get a specific user</h4>
                    <pre>
                        <code> {Address + "api/users/:username"} </code>
                    </pre>
                    <h5>Parameter</h5>
                    <p>The API call has 1 parameter: username, which is the name of the user</p>
                    <h5>Succes</h5>
                    <p>It returns a json array with all users which exist of:</p>
                    <ul>
                        <li>id</li>
                        <li>username</li>
                        <li>loginStatus</li>
                    </ul>
                    <h5>Error</h5>
                    <p>Returns a single string with the error</p>
                </div>
                <div class="container">
                    <h4>Getting user specific tasks</h4>
                    <pre>
                        <code> {Address + "api/tasks/:username"} </code>
                    </pre>
                    <h5>Parameter</h5>
                    <p>The API call has 1 parameter: username, which is the name of the user</p>
                    <h5>Succes</h5>
                    <p>It returns a json array with element one being the username and element 2 being the array of user defined tasks</p>
                    <h5>Error</h5>
                    <p>Returns a single string with the error</p>
                </div>
            </div>
        );
    }
}