import { Box } from "@mui/material"
export const StyledFlexBox = ({ vertical = false, centered = false, children, sx }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                ...(vertical && { flexDirection: 'column' }),
                ...(centered && { justifyContent: 'center', alignItems: 'center' }),
                ...sx,
            }}
            >
            {children}
        </Box >
    )
}