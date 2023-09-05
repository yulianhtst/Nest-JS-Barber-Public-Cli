import { Box } from "@mui/material"

export default function PageLayout({ children }) {
    return (
        <Box
            sx={{
                mx: 'auto',
                // width: '1900px',
                maxWidth: '1920px',
            }}
        >
            {children}
        </Box>
    )
}