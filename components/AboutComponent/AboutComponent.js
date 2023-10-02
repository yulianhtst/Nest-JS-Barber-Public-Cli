import { Box, Typography, Button } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Image from 'next/image';

import bgimg1 from '@/public/backgrounds/AboutPageBg.png'
import Link from 'next/link';



const AboutComponent = () => {
    return (
        <Box
            sx={{
                position: 'relative',


                width: '100%',
                height: '700px',

            }}>
            <Image src={bgimg1} alt={'bg1'}

                style={{
                    // WebkitBoxReflect
                    // transform:'rotatex(180deg) translatey(15px)',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} />

            <Box
                sx={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    background: 'linear-gradient(hsl(0 0% 0% /0),hsl(0 0% 0% /1))'
                }} ></Box>
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                    maxWidth: '1680px',
                    margin: '0 auto',
                }}>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                    <Box sx={{ width: '42%', display: 'flex', flexGrow: '1', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                zIndex: '12',
                                fontFamily: '-apple-system',
                                fontSize: '6rem',
                                fontWeight: 'bold',
                                lineHeight: '0.85',
                                p: '0 60px',
                            }}
                        >
                            Beard Trimming and Styling
                        </Typography>
                    </Box>
                    <Box><p>&nbsp;</p></Box>
                    <hr style={{ zIndex: 12 }} />
                    <Box sx={{ p: '20px 60px', zIndex: 12, fontSize: '1.5rem' }}>
                        <Link href={'/beards'} style={{ display: 'flex' }}>
                            <Typography sx={{ fontSize: '1.5rem', fontFamily: 'serif', }}>
                                Learn more about
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <TrendingFlatIcon sx={{ fontSize: '2.0rem' }} />
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutComponent