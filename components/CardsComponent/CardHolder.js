import { Box, Typography } from "@mui/material"

import CardComponent from "./Card/CardComponent"


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
            <Typography variant="h1" sx={{ color: 'beige', textAlign: 'center', fontFamily: "Roboto" }}>Our team</Typography>
            <Box
                sx={{
                    display: 'flex',
                    margin: '0 auto',
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