import { useReducer } from "react";
import { types } from "./types";
import { appContext } from "./appContext";
import { AppReducer } from "./appReudcer";

const init = () => {

    return {
        language: true
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)

    const newLanguage = (language = true) => {
        const Language = language
        const action = {
            type: types.language,
            payload: Language
        }
        // localStorage.setItem('items', JSON.stringify(allItems))
        dispatch(action)
    }

    return (
        <appContext.Provider value={{
            ...state,
            newLanguage
        }}>
            {children}
        </appContext.Provider >
    )
}
