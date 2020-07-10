import {GET_BACKLOG, GET_PORJECT_TASK, DELETE_PROEJCT_TASK} from "../actions/types";

const initialState = {
        proejct_tasks: [],
        project_task: {}
}

export default function(state=initialState, action) {
    switch(action.type) {

        case GET_BACKLOG:
            return {
                // spread operator
                ...state,
                proejct_tasks: action.payload
            }

        case GET_PORJECT_TASK:
            return {
                ...state,
                project_task: action.payload
            }

        case DELETE_PROEJCT_TASK:
            return {
                ...state
            }

        default:
            return state;
    }

}