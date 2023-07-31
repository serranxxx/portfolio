import { useReducer } from "react";
import { types } from "./types";
import { appContext } from "./appContext";
import { AppReducer } from "./appReudcer";

const init = () => {

    return {
        example: ''
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)

    const setExample = (example = '') => {
        const Example = example
        const action = {
            type: types.example,
            payload: Example
        }
        // localStorage.setItem('items', JSON.stringify(allItems))
        dispatch(action)
    }

    return (
        <appContext.Provider value={{
            ...state,
            setExample
        }}>
            {children}
        </appContext.Provider >
    )
}
