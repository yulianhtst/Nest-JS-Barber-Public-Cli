import { MAP_URL } from "@/constants"
import { Box, Typography } from "@mui/material"

const MapsComponent = () => {
    return (
        <Box bgcolor="beige">
            <Box maxWidth="1680px" sx={{ margin: '0 auto' }}>
                <Box sx={{ padding: '0 200px' }}>
                    <Typography textAlign="center" fontFamily="Roboto" variant="h1" color="black">Find us at</Typography>
                    <iframe src={MAP_URL} width="100%" height="600px" allowfullscreen="false" loading="lazy" style={{ display: 'block', margin: '60px 0' }} referrerpolicy="no - referrer - when - downgrade"></iframe>
                </Box>
                <Box display="flex" justifyContent="space-around" sx={{ '>*': { marginBottom: '60px' } }}>
                    <Box>
                        <Typography fontFamily="Roboto" variant="h3" color="red">Number</Typography>
                        <Typography fontFamily="Roboto" variant="h4" fontWeight="bold" color="black">0897444020</Typography>
                    </Box>
                    <Box>

                        <Typography fontFamily="Roboto" variant="h3" color="red">Email</Typography>
                        <Typography fontFamily="Roboto" variant="h4" fontWeight="bold" color="black">yulianst7@gmail.com</Typography>
                    </Box>
                </Box>

            </Box >
        </Box >
    )
}
export default MapsComponent