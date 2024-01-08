import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

        case types.language:
            return {
                ...state,
                language: action.payload
            }

        case types.theme:
            return {
                ...state,
                theme: action.payload
            }
        default:
            break;
    }
}
