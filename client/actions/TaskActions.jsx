import axios from "axios";

const address = "http://localhost:57028/";
//const address = "http://84.105.96.2/";

export function updateTask(id, token, info) {
    return dispatch => {
        dispatch({
            payload: axios.post(address + "tasks/updateTask?id=" + id + "&token=" + token, {
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
            payload: axios.put(address + "tasks/createTask?id=" + id + "&token=" + token, {
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
            payload: axios.delete(address + "tasks/deleteTask/" + taskid + "?id=" + id + "&token=" + token, {}, {
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
        payload: axios.get(address + "tasks/get?id=" + id + "&token=" + token, {}, {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "GET"
    }
}