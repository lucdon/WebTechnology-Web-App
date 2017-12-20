import React from "react";
import Navigation from "client";
import Modal from 'react-responsive-modal';
import TaskCreate from "TaskCreate";

export default class TaskCreateEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openCreateMode: false
        }
    }

    createTaskOpen() {
        this.setState({openCreateMode: true});

    }

    createTaskClose() {
        setTimeout(() => {
            this.setState({openCreateMode: false});
        }, 5);
    }

    render() {
        return (
            <div class="card w-100 bg-light task">
                <span class="add-img" onClick={this.createTaskOpen.bind(this)}>
                    <img src={Navigation + "images/Button-Plus.png"} />
                    <Modal open={this.state.openCreateMode} onClose={this.createTaskClose.bind(this)} little animationDuration={100}>
                        <TaskCreate callback={this.createTaskClose.bind(this)} />
                    </Modal>
                </span>
            </div>
        );
    }
}