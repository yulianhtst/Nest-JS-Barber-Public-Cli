import { CssBaseline, createTheme } from "@mui/material"
import { ThemeProvider } from "styled-components"

const theme = createTheme({
    palette: {
        primary: {
            main: '#871616'
        }
    }
})


export const ThemeHOC = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}