import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case types.example:
            return {
                ...state,
                value: action.payload
            }
        default:
            break;
    }
}
