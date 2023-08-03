import Head from 'next/head';
import { Box } from '@mui/material';

import CustomSlider from '@/components/common/CustomSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Box sx={{ backgroundColor: 'azure', position: 'absolute', top: '0px' }}>
      </Box >
      <CustomSlider />
    </>
  )
}