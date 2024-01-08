import { useReducer } from "react";
import { types } from "./types";
import { appContext } from "./appContext";
import { AppReducer } from "./appReudcer";
import i18n from "../languages/i18n";

const init = () => {

    return {
        language: !!!JSON.parse(localStorage.getItem('language')),
        theme: true,
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, {}, init)

    const switchLanguage = (language = true) => {
        const Language = language
        const action = {
            type: types.language,
            payload: Language
        }

        if (Language) i18n.changeLanguage('en')
        else i18n.changeLanguage('es')

        localStorage.setItem('language', JSON.stringify(Language))
        dispatch(action)
    }

    const changeTheme = (theme = true) => {
        const Theme = theme
        const action = {
            type: types.theme,
            payload: theme
        }

        localStorage.setItem('theme', JSON.stringify(Theme))
        dispatch(action)
    }

    return (
        <appContext.Provider value={{
            ...state,
            switchLanguage,
            changeTheme
        }}>
            {children}
        </appContext.Provider >
    )
}
