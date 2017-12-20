import React from "react";
import {connect} from "react-redux";
import Moment from "moment";

import {Navigation} from "client";
import {AuthActions, TaskActions} from "actions";

@connect((store) => {
    return {auth: store.auth, tasks: store.task.tasks};
})
export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(AuthActions.login("luccie24", "test123"));
    }

    fetchTasks() {
        this.props.dispatch(TaskActions.getTasks(this.props.auth.id, this.props.auth.token));
    }

    createTask() {
        this.props.dispatch(TaskActions.createTask(this.props.auth.id, this.props.auth.token, {
            description: "",
            endDate: 500000,
            id: 0,
            startDate: 5000000,
            title: "just a task!"
        }));
    }

    deleteTask() {
        this.props.dispatch(TaskActions.deleteTask(this.props.auth.id, this.props.auth.token, 1));
    }

    render() {
        if (this.props.auth.response !== 3) {
            return (
                <div></div>
            );
        }

        const taskArray = [];

        if (this.props.tasks) {
            for (var i = 0; i < this.props.tasks.length; i++) {
                taskArray.push(
                    <p key={i}>task: {this.props.tasks[i].title}</p>
                );
            }
        }

        return (
            <div class="home-page">
                <div class="home-page-img">
                    <h4 class="home-page-title">id: {this.props.auth.id}</h4>
                    <h4 class="home-page-title">token: {this.props.auth.token}</h4>
                    <button onClick={this.fetchTasks.bind(this)}>Get</button>
                    <button onClick={this.createTask.bind(this)}>Create</button>
                    <button onClick={this.deleteTask.bind(this)}>Delete</button>
                    {taskArray}
                </div>
            </div>
        );
    }
}