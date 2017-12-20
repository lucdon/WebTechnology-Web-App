import React from "react";
import {connect} from "react-redux";

import TaskEntry from "TaskEntry";
import TaskCreateEntry from "TaskCreateEntry";
import {TaskActions} from "actions";

@connect((store) => {
    return {auth: store.auth, tasks: store.task.tasks};
})
export default class TaskOverview extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(TaskActions.getTasks(this.props.auth.id, this.props.auth.token));
    }

    render() {
        var rows = [];

        for (var i = 0; i < this.props.tasks.length; i++) {
            rows.push(<TaskEntry task={this.props.tasks[i]} key={this.props.tasks[i].id} />);
        }
        
        return (
            <div>
                <div class="task-container row">
                    <TaskCreateEntry /> {rows}
                </div>
            </div>
        );
    }
}