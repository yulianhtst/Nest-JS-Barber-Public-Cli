import Head from 'next/head';

import { Box, } from '@mui/material';

import NewBetterSlider from '@/components/Slider/SliderComponent'
import NavBar from '@/components/layout/NavBar/NavBar';
import CardHolder from '@/components/CardsComponent/CardHolder';
import BeardsComponent from '@/components/AboutComponent/AboutComponent';
import WorkingHoursComponent from '@/components/WorkingHoursComponent/WorkingHoursComponent';
import FooterComponent from '@/components/layout/Footer/FooterComponent';
import { API_URL } from '@/constants';
import { BarbersContex } from '@/contexts/BarbersContext';

export async function getStaticProps() {
    const resDates = await fetch(API_URL + "dates")
    const resBarbers = await fetch(API_URL + "barbers")

    const [dates, barbers] = await Promise.all([resDates.json(), resBarbers.json()]);

    return {
        props: { dates, barbers }
    }
}
export default function Home({ dates, barbers }) {
    // console.log(dates);
    // console.log(barbers);

    return (

        <>
            <Head>
                <title>Home</title>
            </Head>
            <NavBar></NavBar>


            <NewBetterSlider />


            <hr />
            <CardHolder barbers={barbers} />


            <BeardsComponent />

            <WorkingHoursComponent dates={dates} />


            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'yellow',

                }
                }
            >
                <Box sx={{ display: 'flex', }}>
                    <Box></Box>
                    <Box></Box>
                </Box>
                <Box sx={{
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    position: 'absolute',
                    background: 'linear-gradient(hsl(0 0% 0% /1),hsl(0 0% 0% /0))',
                }}></Box>
            </Box >
            <BeardsComponent />
            <FooterComponent />
        </>
    )
}