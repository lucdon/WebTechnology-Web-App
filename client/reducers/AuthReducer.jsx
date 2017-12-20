export default function reducer(state = {
    fetched: false,
    fetching: false,
    id: "",
    response: null,
    token: ""
}, action) {
    switch (action.type) {
        case "CREATE_ACCOUNT_PENDING":
            {
                return {
                    ...state,
                    fetched: false,
                    fetching: true
                }
            }
        case "CREATE_ACCOUNT_REJECTED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    response: action.payload.response.data
                }
            }
        case "CREATE_ACCOUNT_FULFILLED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    response: "success"
                }
            }
        case "LOGIN_PENDING":
            {
                return {
                    ...state,
                    fetched: false,
                    fetching: true,
                    id: "",
                    token: ""
                }
            }
        case "LOGIN_REJECTED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    id: "",
                    response: action.payload.response.data,
                    token: ""
                }
            }
        case "LOGIN_FULFILLED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    id: action.payload.data[1],
                    response: action.payload.data[0],
                    token: action.payload.data[2]
                }
            }
        case "LOGOUT_PENDING":
            {
                return {
                    ...state,
                    fetched: false,
                    fetching: true
                }
            }
        case "LOGOUT_REJECTED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    response: action.payload.data
                }
            }
        case "LOGOUT_FULFILLED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    id: "",
                    response: "success",
                    token: ""
                }
            }
    }
    return state;
};