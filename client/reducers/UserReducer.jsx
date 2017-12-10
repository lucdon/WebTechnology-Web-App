export default function reducer(state = {
    error: null,
    fetched: false,
    fetching: false,
    user: []
}, action) {
    switch (action.type) {
        case "FETCH_USER":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
        case "FETCH_USER_REJECTED":
            {
                return {
                    ...state,
                    error: action.payload,
                    fetching: false
                }
            }
        case "FETCH_USER_FULFILLED":
            {
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    user: action.payload.data
                }
            }
    }
    return state;
};