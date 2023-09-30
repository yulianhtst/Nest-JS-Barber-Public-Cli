import Image from "next/image"
import imgsrc from "@/images/480019.jpg"
import imgsrcchair from "@/images/chair.jpg"
import imgsrctools from "@/images/tools.jpg"
import imgsrcsaloon from "@/images/saloon.png"
import imgsrc2 from "@/images/backgrounds/manHaircut2.png"
import { Box, Icon, Typography } from "@mui/material"
import ContentCutIcon from '@mui/icons-material/ContentCut';


function BeardsPageComponent() {
    return (
        <>
            <Box position="relative">
                <Box position="absolute" sx={{ top: '2rem', left: '50%', transform: 'translateX(-50%)' }}><ContentCutIcon sx={{ color: 'black', fontSize: '4.6rem', borderBottom: "solid white 4px" }} /></Box>
                <Image src={imgsrc} alt={'BeardsLandingImg'} style={{ objectFit: 'cover', width: '100%' }} />
                <Typography position="absolute" variant="h1" sx={{ right: '10rem', bottom: '3rem' }}>Beards for everyone</Typography>
            </Box >

            <Box display="flex" flexDirection="column" sx={{ width: '100vw' }}>

                <Box display="flex" justifyContent='center' alignItems="center" sx={{ p: '4rem 14rem', }}>
                    <Box sx={{ pr: '15rem', width: '55rem' }}>
                        <Typography sx={{ mb: '5rem' }} variant="h3">Welcome to [Barbershop Name]</Typography>
                        <Typography sx={{ fontSize: '1.2rem' }} >At [Barbershop Name], we believe that a haircut is more than just a trim; it's an experience. Step into our world of style, sophistication, and relaxation, where every visit is an opportunity to elevate your look and rejuvenate your spirit. Your grooming needs are unique, and we understand that. That's why we offer a wide range of services to cater to your preferences. From traditional cuts and hot towel shaves to beard trims and styling advice, our barbers will work closely with you to achieve the look you desire.</Typography>
                    </Box>
                    <Image src={imgsrc2} alt="haircut" style={{ width: '640px', height: '100%', padding: '50px 0' }} />
                </Box>
                <Box display="flex" justifyContent='center' alignItems="center" sx={{ p: '4rem 14rem', }}>
                    <Image src={imgsrcchair} alt="haircut" style={{ height: "100%", padding: '50px 0', aspectRatio: '' }} />
                    <Box sx={{ pl: '15rem', width: '55rem' }}>
                        <Typography sx={{ mb: '5rem', textAlign: 'right' }} variant="h3">The Ultimate Grooming Experience:</Typography>
                        <Typography sx={{ fontSize: '1.2rem', textAlign: 'right' }} >We've created an atmosphere where you can unwind and indulge in the ultimate grooming experience. From the moment you enter, you'll be greeted by our friendly staff and surrounded by a blend of modern aesthetics and classic charm. Our comfortable chairs, soothing music, and attention to detail ensure that every visit is a moment of relaxation and pampering.</Typography>
                    </Box>
                </Box>
            </Box>

            <Box display="grid" gridTemplateColumns="repeat(3,1fr)" bgcolor="#efebe9" sx={{ p: '3rem' }}>
                <Box color='black' gridColumn="1/3 " sx={{ alignSelf: 'center', justifySelf: 'center' }}>
                    <Image src={imgsrcsaloon} style={{ width: '100%', height: '100%' }} />
                </Box>

                <Box color="black" sx={{ p: '0 10rem', width: '55rem', justifySelf: 'center', alignSelf: 'center' }}>
                    <Typography sx={{ mb: '5rem', }} variant="h3">Visit Us Today:</Typography>
                    <Typography sx={{ fontSize: '1.2rem' }} >
                        Whether you're looking to refresh your appearance or simply relax and unwind, [Barbershop Name] is the place to be. Join us for an exceptional grooming journey that leaves you not just looking great but feeling confident and revitalized.
                        Discover the difference at [Barbershop Name]. Book your appointment today and experience the excellence of our barbershop. We can't wait to welcome you and help you look and feel your absolute best.
                    </Typography>
                </Box></Box>
        </>
    )
}
export default BeardsPageComponent