import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

const ThemeWrapper = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ? "dark-theme" : "light-theme"}>
            {children}
        </div>
    );
};

export default ThemeWrapper;