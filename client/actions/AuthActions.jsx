import axios from "axios";
import store from "./../store.jsx";
import {Address} from "client";

export function createAccount(name, pwd) {
    return {
        payload: axios.post(Address + "auth/createAccount", {
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
        payload: axios.post(Address + "auth/login", {
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
        payload: axios.post(Address + "auth/logout", "\"" + id + "\"", {
            headers: {
                "Content-Type": "application/json"
            }
        }),
        type: "LOGOUT"
    }
}