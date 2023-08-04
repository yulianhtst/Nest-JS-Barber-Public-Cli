import Head from 'next/head';
import PageLayout from '@/components/layout/PageLayout';

import CustomSlider from '@/components/common/CustomSlider';


export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageLayout>
      </PageLayout>
      <CustomSlider />
    </>
  )
}