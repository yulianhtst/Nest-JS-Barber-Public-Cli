import { Box, Typography } from "@mui/material"
import Image from "next/image"
import haircut from '@/public/PricesComponentImages/haircut.jpg'
import kidsHaricut from '@/public/PricesComponentImages/kidsHaircut.jpg'
import shaving from '@/public/PricesComponentImages/shaving.jpg'
import washing from '@/public/PricesComponentImages/washing.jpg'

const PricesComponent = () => {
    return (
        <Box sx={{ background: 'linear-gradient(black, beige)' }}>
            <Box display='flex' flexDirection="column" sx={{ maxWidth: '1620px', m: '0 auto ' }}>
                <Box>
                    <Typography variant="h1" sx={{ pl: '60px' }}>Prices </Typography>
                    <Box gap='20px' display="flex" flexWrap="wrap" sx={{ padding: '60px', margin: '60px' }}>
                        <Box position="relative" overflow="hidden" height={400} sx={{ borderRadius: '30px',boxShadow:'0 25px 50px -12px rgb(0 0 0 / 0.25)' }}>
                            <Typography fontWeight="bold" color='gold' variant="h2" position="absolute" bottom={5} left={60} zIndex="2">Haircut</Typography>
                            <Image width={650} style={{ transform: 'translateY(-120px)' }} src={haircut} alt="haircut" />
                            <Box position="absolute" borderRadius="20px" left={30} bottom={30} right={30} top={30} border="4px solid gold"></Box>
                            <Typography color='black' padding='10px' borderRadius="20px" bgcolor='gold' bottom={5} right={60} position="absolute" variant="h4" fontWeight="bold">25.00$</Typography>

                        </Box >
                        <Box position="relative" overflow="hidden" height={400} sx={{ borderRadius: '30px',boxShadow:'0 25px 50px -12px rgb(0 0 0 / 0.25)' }}>
                            <Typography fontWeight="bold" color='gold' variant="h2" position="absolute" bottom={5} left={60} zIndex="2">Kids</Typography>

                            <Image width={650} style={{ transform: 'translateY(-120px)' }} src={kidsHaricut} alt="kids" />
                            <Box position="absolute" borderRadius="20px" left={30} bottom={30} right={30} top={30} border="4px solid gold"></Box>
                            <Typography color='black' padding='10px' borderRadius="20px" bgcolor='gold' bottom={5} right={60} position="absolute" variant="h4" fontWeight="bold">10.00$</Typography>

                        </Box >
                        <Box position="relative" overflow="hidden" height={400} sx={{ borderRadius: '30px',boxShadow:'0 25px 50px -12px rgb(0 0 0 / 0.25)' }}>
                            <Typography fontWeight="bold" color='gold' variant="h2" position="absolute" bottom={5} left={60} zIndex="2">Shaving</Typography>

                            <Image width={650} style={{ transform: 'translateY(-120px)' }} src={shaving} alt="shaving" />
                            <Box position="absolute" borderRadius="20px" left={30} bottom={30} right={30} top={30} border="4px solid gold"></Box>
                            <Typography color='black' padding='10px' borderRadius="20px" bgcolor='gold' bottom={5} right={60} position="absolute" variant="h4" fontWeight="bold">15.00$</Typography>

                        </Box >
                        <Box position="relative" overflow="hidden" height={400} sx={{ borderRadius: '30px',boxShadow:'0 25px 50px -12px rgb(0 0 0 / 0.25)' }}>
                            <Typography fontWeight="bold" color='gold' variant="h2" position="absolute" bottom={5} left={60} zIndex="2">Washing</Typography>
                            <Image width={650} style={{ transform: 'translateY(-120px)' }} src={washing} alt="washing" />
                            <Box position="absolute" borderRadius="20px" left={30} bottom={30} right={30} top={30} border="4px solid gold"></Box>
                            <Typography color='black' padding='10px' borderRadius="20px" bgcolor='gold' bottom={5} right={60} position="absolute" variant="h4" fontWeight="bold">10.00$</Typography>
                        </Box >
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}
export default PricesComponent