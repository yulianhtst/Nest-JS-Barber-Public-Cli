import { createTheme } from "@mui/material"
import { orange } from "@mui/material/colors"

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: orange[500],
        }
    },


})