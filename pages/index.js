import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Welcome from '../components/Welcome';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
    <Head>
        <title>Amine Braham</title>
    </Head>
    <div className='snap-start'>
      <Header/>
      <Welcome/>
    </div>
    <div className='snap-start'>
      <Introduction/>
    </div>
    <div className='snap-start'>
      <Carousel/>
    </div>
    <div className='snap-start'>
      <Contact/>
      <Footer/>
    </div>
    </div>
  )
}
