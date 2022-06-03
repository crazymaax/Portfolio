import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../GlobalStyle";
import { themes } from "./themes";
import { useUI } from "../../providers/UI/ui";

const ThemeSelector = ({ children }) => {

    const { currentTheme } = useUI();

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default ThemeSelector