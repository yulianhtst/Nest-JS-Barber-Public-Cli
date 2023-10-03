import Image from 'next/image';

import { Box, Button, Typography } from "@mui/material";



const ImageComponent = ({ width, image }) => {
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
                                margin: '0 auto',

                            }}
                        >
                            <Typography
                                sx={{

                                    marginTop: '100px',
                                    marginBottom: '100px',
                                    fontFamily: '-apple-system',
                                    fontSize: '6rem',
                                    fontWeight: 'bold',
                                    lineHeight: '110px',
                                }}
                            >
                                Hello to my WebSite that is very responsive ala bala ala bala
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    maxHeight: '3.5em',
                                    maxWidth: '20em',
                                    minHeight: '5em',
                                    minWidth: '24em',
                                    background: `linear-gradient(
                                        rgba(80, 70, 70, 0.5),
                                    rgba(80, 70, 70, 0.8)
                                    )`,
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
}
export default ImageComponent;





