import { Box } from "@mui/material"
import StyledBox from "@/components/common/StyledBox"

const FooterComponent = () => {
    return (
        <Box sx={{ maxWidth: '1680px', m: '0 auto' }}>
            <Box sx={{ width: '100%', height: '525px', bgcolor: 'white' }}>

                <h1>This is footer</h1>

            </Box>
        </Box>
    )
}
export default FooterComponent