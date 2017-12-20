import Moment from "moment";

export default function reducer(state = {
    error: null,
    fetched: false,
    fetching: false,
    tasks: []
}, action) {
    switch (action.type) {
        case "GET_PENDING":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
        case "GET_REJECTED":
            {
                return {
                    ...state,
                    error: action.payload,
                    fetching: false
                }
            }
        case "GET_FULFILLED":
            {
                const tasks = action.payload.data;
                for(var i =0; i < tasks.length; i++){
                    tasks[i].startDate = Moment.unix(tasks[i].startDate / 1000.0);
                    tasks[i].endDate = Moment.unix(tasks[i].endDate / 1000.0);
                }
                return {
                    ...state,
                    fetched: true,
                    fetching: false,
                    tasks: tasks
                }
            }
    }
    return state;
};