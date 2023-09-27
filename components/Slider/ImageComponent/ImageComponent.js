import Image from 'next/image';
import { forwardRef } from "react";

import { Box, Button, Typography } from "@mui/material";
import { StyledFlexBox } from '../../common/StyledFlexBox';

const clickHandler = {
    0: '/hello',
    1: '/hello',
    2: '/hello',
    3: '/hello',
}

const ImageComponent = forwardRef(({ index, width, image }, ref) => {

    if (image) {
        return (
            <Box width={width}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                    }}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            overflow: 'hidden',
                            flex: "1",
                            zIndex: '1',


                            flexDirection: 'column',
                            justifyContent: 'center',

                            paddingTop: '10rem',
                            paddingBottom: '10rem',

                            //dynamic width
                        }}
                    >
                        <Image
                            priority
                            alt={0}
                            src={image}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'relative',
                                maxWidth: '1680px',
                                border: '4px solid red ',
                                margin: '0 auto',
                                // margin: '200px auto',
                                // maxWidth: '115.2rem',
                                // maxHeight: '50.2rem',
                                // paddingLeft: '3.2rem',
                                // paddingRight: '3.2rem',
                            }}
                        >
                            <Typography
                                sx={{
                                    border: '4px solid red ',

                                    marginTop: '100px',
                                    marginBottom: '100px',
                                    fontFamily: '-apple-system',
                                    fontSize: '700%',
                                    fontWeight: 'bold',
                                    lineHeight: '110px',
                                }}
                            >Hello to my WebSite that is very responsive ala bala ala bala
                            </Typography>
                            <Button
                                // href={clickHandler[index]}
                                variant="contained"
                                sx={{
                                    border: '4px solid red ',

                                    maxHeight: '3.5em',
                                    maxWidth: '20em',
                                    minHeight: '5em',
                                    minWidth: '24em',
                                    // background: 'linear-gradient(to left, #330, #333 80%, #eee 75%, #333 75%)',
                                    // background: 'linear-gradient(hsl(50 80% 40%))',
                                    background: `linear-gradient(
                                        rgba(80, 70, 70, 0.5),
                                    rgba(80, 70, 70, 0.8)
                                    )`,
                                    // background: 'rgba(80, 70, 70, 0.8)',

                                    marginTop: '100px',
                                }}
                            >
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box >

        )
    } else return null;
})
export default ImageComponent;





