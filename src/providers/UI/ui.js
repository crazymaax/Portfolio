import { createContext, useCallback, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const [currentTheme, setCurrentTheme] = useState("dark");

    const getOpositeTheme = useCallback(() => (currentTheme === "light" ? "dark" : "light"),
        [currentTheme]
    );

    return (
        <UIContext.Provider value={{ currentTheme, setCurrentTheme, getOpositeTheme }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => useContext(UIContext);
