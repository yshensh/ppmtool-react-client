import { GET_ERRORS } from "../actions/types";

const initialState = { test: "test" };

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;

        default:
            return state;
    }
}