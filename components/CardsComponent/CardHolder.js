import { Box, Typography } from "@mui/material"

import CardComponent from "./Card/CardComponent"
import { green, grey, pink, red } from "@mui/material/colors"


const CardHolder = ({ barbers }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '50px',
                flexDirection: 'column',
                margin: '0 auto',
                justifyContent: 'center',
                padding: '10rem 0',
                // background: `radial-gradient(farthest-corner, ${grey[100]}, ${grey[300]},${grey[600]},${grey[900]}, black)`
                background: `linear-gradient(black, #8f8168)`
                // background: 'radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)'
            }}
        >
            {/* <Typography sx={{ color: 'black', fontSize: '2rem', textAlign: 'center' }}>Марджина на картите трябва да се оправи</Typography> */}
            <Box
                sx={{
                    display: 'flex',
                    m: '0 auto',
                    maxWidth: '1680px',
                    position: 'relative',


                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                {barbers?.map((barber, i) => {
                    return (
                        <CardComponent barber={barber} key={i} />
                    )
                })}
            </Box>
        </Box >
    )
}
export default CardHolder