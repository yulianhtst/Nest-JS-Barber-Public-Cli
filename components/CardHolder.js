import { Box } from "@mui/material"

import CardComponent from "./common/CardComponent/CardComponent"
const arrMap = [0, 1, 2]


const CardHolder = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: 'white',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    position:'relative',
                    display: 'grid',
                    gap: '120px',
                    margin: '0 20px',
                    gridTemplateColumns: 'repeat(3,1fr)',
                }}
            >
                {arrMap.map(_ => {
                    return (
                        <CardComponent />
                    )
                })}

            </Box>
        </Box >
    )
}
export default CardHolder