import { createContext, useContext } from "react";
import { appConfig } from "../config";

const context = createContext()

const apiUrl = ( process.env.NODE_ENV=="development" ) ? appConfig.dev_config.apiUrl : appConfig.prod_config.apiUrl 
    
export default function Context({ children }) {
    return (
        <Context.Provider value={{ apiUrl }}>
            { children }
        </Context.Provider>
    )
}

export const GlobalStates = () => useContext(context)
