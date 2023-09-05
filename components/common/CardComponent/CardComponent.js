import { Box, Typography, Button, Container } from "@mui/material"
import img1 from '@/public/images/qualities-of-a-highly-professional-barber.jpg'
import img2 from '@/public/images/00CelebrityBarbers-lede-try-btcf-videoSixteenByNine3000.jpg'
import img3 from '@/public/images/Untitled.jpg'
import Image from "next/image"

export default function CardComponent({ position }) {

    return (
        <Box
            sx={{
                position: "relative",
                width: "400px",
                height: '600px',

                '&:hover': {
                    '>*': {
                        transform: 'rotateY(180deg)',
                    }
                },
                '>*': {
                    transition: '2s',
                    transformStyle: 'preserve-3d',
                }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            >

                <Box
                    sx={{
                        position: 'absolute',
                        backgroundColor: 'radial-gradient(#000000, #9198e5)',
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        gridTemplateColumns: "1fr 1fr",
                        gridTemplateRows: 'repeat(3,1fr)',
                    }}
                >

                    <Box sx={{ gridColumn: '1/3', position: 'relative', }}>
                        <Image style={{


                            objectFit: 'cover',
                            maxWidth: '100%',
                            height: '400px',

                        }} src={img1} alt={'barber1'} />
                    </Box>

                    <Box sx={{
                        gridRow: "2/ span 2",
                        gridColumn: '1 /span 2',
                        backgroundColor: 'black',
                    }}>

                    </Box>

                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        backgroundColor: 'orange',
                        width: '100%',
                        height: '100%',
                        transform: 'rotateX(180deg)',
                        backfaceVisibility: 'hidden',
                    }}
                >

                </Box>
            </ Box>
        </Box>
    )
}
