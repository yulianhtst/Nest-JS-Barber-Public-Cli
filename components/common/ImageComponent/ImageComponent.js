import Image from 'next/image';
import { forwardRef } from "react";

import { Box, Button, Typography } from "@mui/material";

const clickHandler = {
    0: '/hello',
    1: '/hello',
    2: '/hello',
    3: '/hello',
}

const ImageComponent = forwardRef(({ index, width, image }, ref) => {
    if (image) {
        return (
            <Box
                width={width}
                sx={{
                    display: 'flex',
                    minHeight: '100%',
                    flexDirection: 'column',
                    verticalAlign: 'baseline',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                    }}
                >
                    <Box
                        ref={ref}
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            boxSizing: 'border-box',
                            overflow: 'hidden',
                            flex: "1 1 0",
                            zIndex: '1',


                            flexDirection: 'column',
                            justifyContent: 'center',

                            paddingTop: '20rem',
                            paddingBottom: '20rem',

                            //dynamic width
                            // width: '1920px',
                            height: '100%',
                        }}
                    >
                        <Image
                            priority
                            alt={0}
                            src={image}
                            style={{
                                position: 'absolute',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover',
                                top: '0',
                                left: '0',

                                // backgroundSize: 'cover',
                                backgroundPosition: '50% 50%',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'relative',
                                margin: '0 auto',
                                maxWidth: '115.2rem',
                                maxHeight: '50.2rem',
                                paddingLeft: '3.2rem',
                                paddingRight: '3.2rem',
                            }}
                        >
                            <Typography
                                sx={{
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
                                href={clickHandler[index]}
                                variant="contained"
                                sx={{
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





