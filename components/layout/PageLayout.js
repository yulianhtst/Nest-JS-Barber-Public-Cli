import { Box } from "@mui/material"

export default function PageLayout({ children }) {
    return (
        <Box

            sx={{
                backgroundColor: {
                    md: 'pink',
                    sm: 'yellow',
                    lg: 'white',
                },
                marginInline: 'auto',
                // width: '1900px',
                p: {
                    md: '150px 0 150px 0',
                    sm: '150px 0 150px 0',
                    lg: '150px 0 150px 0',
                },
            }}
        >
            {children}
        </Box >
    )
}