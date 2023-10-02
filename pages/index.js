import Head from 'next/head';

import { Box, } from '@mui/material';

import NewBetterSlider from '@/components/Slider/SliderComponent'
import NavBar from '@/components/layout/NavBar/NavBar';
import CardHolder from '@/components/CardsComponent/CardHolder';
import BeardsComponent from '@/components/AboutComponent/AboutComponent';
import WorkingHoursComponent from '@/components/WorkingHoursComponent/WorkingHoursComponent';
import FooterComponent from '@/components/layout/Footer/FooterComponent';
import { API_URL, MAP_URL } from '@/constants';
import { BarbersContex } from '@/contexts/BarbersContext';
import PricesComponent from '@/components/PricesComponent/PricesComponent';

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


            <PricesComponent />


            <iframe src={MAP_URL} width="600px" onScroll={(e) => e.preventDefault()} height="450px" allowfullscreen="false" loading="lazy" style={{ display: 'block', margin: '0 auto' }} referrerpolicy="no - referrer - when - downgrade"></iframe>
            <FooterComponent />
        </>
    )
}