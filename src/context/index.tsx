import { createContext, useContext } from "react"
import { environment } from "../environment"

const context = createContext("")

const { apiUrl } = environment

const Context = ({ children }: any) => {
    return (
        <context.Provider value={
           apiUrl
        }>
            { children }
        </context.Provider>
    )
}

export const GlobalStates = () => useContext(context)

export default Context
