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
                backgroundColor: 'white',
                justifyContent: 'center',
                border: '4px solid red ',
            }}
        >
            <Typography sx={{ color: 'black', fontSize: '2rem', textAlign: 'center' }}>Марджина на картите трябва да се оправи</Typography>
            <Box
                sx={{
                    display: 'flex',
                    m: '0 auto',
                    maxWidth: '1680px',
                    position: 'relative',

                    border: '4px solid red ',

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