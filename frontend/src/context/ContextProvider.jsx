import React,{ createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const [rightslide, setRightSlide] = useState(false);
        return (
        <StateContext.Provider value={{rightslide,setRightSlide}} >
        
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
