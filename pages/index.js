import Head from 'next/head';

import { Box, Typography, Container } from '@mui/material';

import NewBetterSlider from '@/components/common/Slider/NewBetterSlider'
import PageLayout from '@/components/layout/PageLayout';
import NavBar from '@/components/layout/NavBar/NavBar';
import CardHolder from '@/components/CardHolder';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar></NavBar>


      <NewBetterSlider />


      <PageLayout>
        <hr />

        {/* <CardHolder /> */}
        <hr style={{margin:'40px'}} />
 
        <Box
          sx={{
            backgroundColor: 'violet',
          }}
        >
          <Typography>

          </Typography>
        </Box>
        <hr />
        <Box
          sx={{
            backgroundColor: 'pink',
            height: 500,

          }}
        >
        </Box>
        <hr />

        <Box
          sx={{
            backgroundColor: 'silver',
            height: 500,

          }}
        >
        </Box>
        <hr />


      </PageLayout >
      <Box
        sx={{
          backgroundColor: 'yellow',
          height: 500,

        }}
      >
      </Box>

    </>
  )
}