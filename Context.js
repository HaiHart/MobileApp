import React from "react";

const color ={
    BLUE : "93D8F8",
    PINK : "FF97B5",
    BLACK : "2F2D51",
    WHITE : "F2F7FF",
    GREY : "D5D5E1",
}

export const MainContext = React.createContext()

export default function AppContext() {
    return(
        <MainContext.Provider value={{
            color:color,
        }}>
        </MainContext.Provider>
    )
}
