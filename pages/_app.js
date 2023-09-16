import '@/styles/globals.css'
import PageLayout from '@/components/layout/PageLayout'
import { ThemeHOC } from '@/HOC/ThemeHOC'


export default function App({ Component, pageProps }) {
  return (
    // <PageLayout> 
    <ThemeHOC>
      <Component {...pageProps} />
    </ThemeHOC>
    // </PageLayout>
  )
}
