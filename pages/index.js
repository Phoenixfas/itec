import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Hero from './Hero'
import Stats from './Stats'
import Description from './Description'
import Partners from './Partners'
import Slider from './Slider'
import Speakers from './Speakers'
import Exhibitors from './Exhibitors'
import MediaPartners from './MediaPartners'
import BlogsList from './BlogsList'


export default function Home() {
  return (
    <>
      <Head>
        <title>ITEC - Innovative Tech Expo & Conference</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ITEC - Innovative Tech Expo & Conference" />
      </Head>
      <div className={styles.main}>
        <Hero />
        <Stats />
        <Description />
        <Partners />
        <Slider />
        <Exhibitors />
        <Speakers />
        <MediaPartners />
        <BlogsList />
      </div>
    </>
  )
}
