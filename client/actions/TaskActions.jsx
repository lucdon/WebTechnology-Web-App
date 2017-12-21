import axios from "axios";
import {Address} from "client";

export function updateTask(id, token, info) {
    return dispatch => {
        dispatch({
            payload: axios.post(Address + "tasks/updateTask?id=" + id + "&token=" + token, {
                description: info.description,
                endDate: info.endDate,
                id: info.id,
                startDate: info.startDate,
                title: info.title
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                dispatch(getTasks(id, token));
            }),
            type: "UPDATE"
        });
    }
}

export function createTask(id, token, info) {
    return dispatch => {
        dispatch({
            payload: axios.put(Address + "tasks/createTask?id=" + id + "&token=" + token, {
                description: info.description,
                endDate: info.endDate,
                id: info.id,
                startDate: info.startDate,
                title: info.title
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                dispatch(getTasks(id, token));
            }),
            type: "CREATE"
        });
    }
}

export function deleteTask(id, token, taskid) {
    return dispatch => {
        dispatch({
            payload: axios.delete(Address + "tasks/deleteTask/" + taskid + "?id=" + id + "&token=" + token, {}, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                dispatch(getTasks(id, token));
            }),
            type: "DELETE"
        });
    }
}

export function getTasks(id, token) {
    return {
        payload: axios.get(Address + "tasks/get?id=" + id + "&token=" + token, {}, {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "GET"
    }
}