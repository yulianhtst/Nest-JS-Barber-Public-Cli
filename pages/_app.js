import '@/styles/globals.css'
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
