import { ThemeProvider } from "styled-components"
import { useUI } from "../../providers/UI/ui";

import { GlobalStyle } from "../GlobalStyle";
import { themes } from "./themes";

const ThemeSelector = ({children}) => {

    const { currentTheme } = useUI();

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default ThemeSelector