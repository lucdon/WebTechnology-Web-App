import axios from "axios";
import store from "./../store.jsx";

const address = "http://localhost:57028/";
//const address = "http://84.105.96.2/";

export function createAccount(name, pwd) {
    return {
        payload: axios.post(address + "auth/createAccount", {
            password: pwd,
            username: name
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "CREATE_ACCOUNT"
    }
}

export function login(name, pwd) {
    return {
        payload: axios.post(address + "auth/login", {
            password: pwd,
            username: name
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "LOGIN"
    }
}

export function logout(id) {
    return {
        payload: axios.post(address + "auth/logout", "\"" + id + "\"", {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "LOGOUT"
    }
}