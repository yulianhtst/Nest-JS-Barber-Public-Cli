import Head from 'next/head';
import PageLayout from '@/components/layout/PageLayout';

import CustomSlider from '@/components/common/CustomSlider';
import Carousel from '@/components/common/CustomSlider';

import { Box } from '@mui/material';
import { green } from '@mui/material/colors';


import image1 from '@/public/images/686034.jpg'
import image2 from '@/public/images/1275604.jpg'
import image3 from '@/public/images/1295802.jpg'


const images = [image1, image2, image3]
export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <PageLayout>
      </PageLayout> */}
      <Carousel />
      {/* <CustomSlider /> */}
      {/* <Box sx={{
        width: '100vw',
        height: '100vh',
        background: green[700]
      }}></Box> */}
    </>
  )
}