import { Box } from "@mui/material";

export default function StyledBox({ children, sx }) {
    return (
        <Box
            sx={{
                ...sx
            }}
        >
            {children}
        </Box>
    )
}