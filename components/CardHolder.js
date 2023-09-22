import { Box, Typography } from "@mui/material"

import PageLayout from "./layout/PageLayout"
import CardComponent from "./CardComponent/CardComponent"
import { StyledFlexBox } from "./common/StyledFlexBox"
const arrMap = [0, 1, 2, 3]


const CardHolder = () => {
    return (

            <StyledFlexBox
                sx={{
                    gap: '50px',
                    flexDirection: 'column',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    border: '4px solid red ',
                }}
            >
                <Typography sx={{ color: 'black', fontSize: '2rem', textAlign: 'center' }}>Марджина на картите трябва да се оправи</Typography>
                <StyledFlexBox
                    sx={{
                        m: '0 auto',
                        maxWidth: '1680px',
                        position: 'relative',

                        border: '4px solid red ',

                        justifyContent: 'space-between',
                        flexWrap: 'wrap',

                        // margin: '0 20px',
                        // gridTemplateColumns: 'repeat(3,1fr)',
                    }}
                >
                    {arrMap.map(_ => {
                        return (
                            <CardComponent />
                        )
                    })}

                </StyledFlexBox>
            </StyledFlexBox >
    )
}
export default CardHolder