import React from "react";
import DatePicker from 'react-datepicker';
import TimePicker from 'react-bootstrap-time-picker';
import Moment, {min} from 'moment';

import {TaskActions} from "actions";

export default class TaskCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            endDate: Moment(),
            startDate: Moment(),
            taskDescription: "",
            taskName: "new task"
        };
    }

    handleInputChange(e) {
        const target = e.target;
        var value;
        if (target.type === "checkbox") {
            value = target.checked;
        } else if (target.type === "text") {
            value = target.value;
        } else {
            value = target.value;
        }

        this.setState({
            [target.name]: value
        });
    }

    handleStartDateChange(date) {
        this.setState({startDate: date});
    }

    handleStartTimeChange(time) {
        var seconds = time % 60;
        seconds -= seconds % 1;
        var minutes = time / 60 % 60;
        minutes -= minutes % 1;
        var hours = time / 60 / 60 % 24;
        hours -= hours % 1;
        this.state.startDate.hours(hours);
        this.state.startDate.minutes(minutes);
        this.state.startDate.seconds(seconds);
        this.state.startDate.milliseconds(0);
    }

    getStartTime() {
        var seconds = this.state.startDate.seconds();
        var minutes = this.state.startDate.minutes();
        var hours = this.state.startDate.hours();

        minutes -= minutes % 15;

        return minutes * 60 + hours * 60 * 60;
    }

    handleEndDateChange(date) {
        this.setState({endDate: date});
    }

    handleEndTimeChange(time) {
        var seconds = time % 60;
        seconds -= seconds % 1;
        var minutes = time / 60 % 60;
        minutes -= minutes % 1;
        var hours = time / 60 / 60 % 24;
        hours -= hours % 1;
        this.state.endDate.hours(hours);
        this.state.endDate.minutes(minutes);
        this.state.endDate.seconds(seconds);
        this.state.endDate.milliseconds(0);
    }

    getEndTime() {
        var seconds = this.state.endDate.seconds();
        var minutes = this.state.endDate.minutes();
        var hours = this.state.endDate.hours();

        minutes -= minutes % 15;

        return minutes * 60 + hours * 60 * 60;
    }

    getEndDate() {
        var start = this.state.startDate;
        var end = this.state.endDate;
        if (!start.isBefore(end)) {
            this.state.endDate.dayOfYear(start.dayOfYear());
            this.state.endDate.year(start.year());
        }
        return this.state.endDate;
    }

    getEndStartTime() {
        var start = this.state.startDate;
        var end = this.state.endDate;
        if (start.dayOfYear() === end.dayOfYear() && start.year() === end.year()) {
            var mins = start.minutes();
            mins -= mins % 15;
            start.minutes(mins);
            return start.format("HH:mm");
        } else if (start.isBefore(end)) {
            return "0:00";
        } else {
            var mins = start.minutes();
            mins -= mins % 15;
            start.minutes(mins);
            return start.format("HH:mm");
        }
    }

    createTaskClick(e) {
        var description = this.state.taskDescription;
        var name = this.state.taskName;

        if (name === "") {
            alert("wrong name!");
            return;
        }

        this.state.startDate.minutes(this.state.startDate.minutes() - this.state.startDate.minutes() % 15);
        this.state.startDate.seconds(0);
        this.state.startDate.milliseconds(0);
        this.state.endDate.minutes(this.state.endDate.minutes() - this.state.endDate.minutes() % 15);
        this.state.endDate.seconds(0);
        this.state.endDate.milliseconds(0);

        const info = {
            description: description,
            endDate: Moment.max(this.state.endDate, this.state.startDate).unix(),
            id: 0,
            startDate: Moment.min(this.state.startDate, this.state.endDate).unix(),
            title: name
        };

        this.props.dispatch(TaskActions.createTask(this.props.auth.id, this.props.auth.token, info));
        this.props.callback();
    }

    cancelTaskClick(e) {
        this.props.callback();
    }

    render() {
        return (
            <div class="task-form container">
                <div class="row">

                    <div class="col-sm-12 col-md-6">
                        <div class="bordered">
                            <label class="label">
                                Task name:
                            </label>
                            <br />
                            <input className="task-name" name="taskName" type="text" value={this.state.taskName} onChange={this.handleInputChange.bind(this)} />
                            <br />
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6">
                        <div class="bordered">
                            <label class="label">
                                Task Description:
                            </label>
                            <br />
                            <textarea className="task-desc" name="taskDescription" type="textarea" onChange={this.handleInputChange.bind(this)} />
                            <br />
                        </div>
                    </div>

                    <div class="time-picker col-sm-12 col-md-6">
                        <div class="start">
                            <label class="label">Task Start Date:
                            </label>
                            <DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange.bind(this)} popperPlacement={"auto"} />
                            <label class="label">Task Start Time:
                            </label>
                            <TimePicker onChange={this.handleStartTimeChange.bind(this)} value={this.getStartTime()} start="0:00" end="23:59" step={15} />
                        </div>
                    </div>

                    <div class="time-picker col-sm-12 col-md-6">
                        <div class="end">
                            <label class="label">Task End Date:
                            </label>
                            <DatePicker selected={this.getEndDate()} onChange={this.handleEndDateChange.bind(this)} popperPlacement={"auto"} />

                            <label class="label">Task End Time:
                            </label>
                            <TimePicker onChange={this.handleEndTimeChange.bind(this)} value={this.getEndTime()} start={this.getEndStartTime()} end="23:59" step={15} />
                        </div>
                    </div>

                    <button onClick={this.createTaskClick.bind(this)} class="btn btn-success spacing">Create Task</button>
                    <button onClick={this.cancelTaskClick.bind(this)} class="btn btn-danger spacing">Cancel</button>
                </div>
            </div>
        );
    }
}