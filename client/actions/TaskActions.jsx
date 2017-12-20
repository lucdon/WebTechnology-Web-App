import axios from "axios";

const address = "http://localhost:57028/";
//const address = "http://84.105.96.2/";

export function updateTask(id, token, info) {
    return {
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
        }),
        type: "UPDATE"
    }
}

export function createTask(id, token, info) {
    return {
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
        }),
        type: "CREATE"
    }
}

export function deleteTask(id, token, taskid) {
    return {
        payload: axios.delete(address + "tasks/deleteTask/" + taskid + "?id=" + id + "&token=" + token, {}, {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "DELETE"
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