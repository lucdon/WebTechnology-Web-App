import React from "react";

import TaskEdit from "TaskEdit";
import Modal from 'react-responsive-modal';
import Moment from "moment";
import {TaskActions} from "actions";

export default class TaskEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openEditMode: false,
            percentageComplete: 0
        }

        this.tick = this.tick.bind(this);

        this.updateProgressPercentage = this.updateProgressPercentage.bind(this);
    }

    editTaskOpen() {
        this.setState({openEditMode: true});
    }

    editTaskClose() {
        setTimeout(() => {
            this.setState({openEditMode: false});
        }, 5);
    }

    tick() {
        this.updateProgressPercentage();
    }

    componentDidMount() {
        this.updateProgressPercentage();
        const diff = this.props.task.endDate.diff(this.props.task.startDate).toPrecision();
        this.interval = setInterval(this.tick, Math.max(diff / 100, 1000)); // only change by 1% diffrence
    }

    componentWillUpdate() {
        setTimeout(() => {
            this.updateProgressPercentage();
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    deleteTask() {
        this.props.dispatch(TaskActions.deleteTask(this.props.auth.id, this.props.auth.token, this.props.task.id));
    }

    updateProgressPercentage() {
        const now = Moment();
        const start = this.props.task.startDate;
        const end = this.props.task.endDate;
        if (now.isAfter(end)) {
            this.props.task.complete = true;
            this.setState({percentageComplete: 100});
            return;
        }
           
        this.props.task.complete = false;

        if (now.isBefore(start)) {
            this.setState({percentageComplete: 0});
            return;
        }

        var nde = end.diff(now);
        var sde = end.diff(start);

        this.setState({
            percentageComplete: 100 - (nde.toPrecision() / sde.toPrecision() * 100)
        });
    }

    render() {
        const {task} = this.props;

        return (
            <div class={"card w-100 text-white bg-dark " + (task.complete ? "border-success" : "") + " task"}>
                <div class="card-body">
                    <h4 class="card-title">
                        {task.name}
                    </h4>

                    <div class="progress">
                        <div
                            class="progress-bar progress-bar-striped bg-success task-complete"
                            role="progressbar"
                            style={{
                            width: this.state.percentageComplete + "%"
                        }}></div>
                    </div>
                    <br />
                    <p class="card-text task-description">{task.description}</p>
                </div>

                <div class="card-footer text-center">
                    <p class="card-text">
                        Start Time: {task.startDate.fromNow()}
                        <br />
                        End Time: {task.endDate.fromNow()}
                    </p>
                    <div>
                        <button class="btn btn-primary btn-edit" onClick={this.editTaskOpen.bind(this)}>
                            Edit Task
                            <Modal open={this.state.openEditMode} onClose={this.editTaskClose.bind(this)} little animationDuration={100}>
                                <TaskEdit
                                    auth={{
                                    id: this.props.auth.id,
                                    token: this.props.auth.token
                                }}
                                    dispatch={this.props.dispatch}
                                    task={task}
                                    callback={this.editTaskClose.bind(this)} />
                            </Modal>
                        </button>
                        <button class="btn btn-danger  btn-delete" onClick={this.deleteTask.bind(this)}>Delete Task</button>
                    </div>
                </div>
            </div>
        );
    };
}