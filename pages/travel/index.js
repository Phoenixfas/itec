import style from '../../styles/Travel.module.css'
import Hero from './Hero'
import Head from 'next/head'
import Visa from './Visa'
import Airline from './Airline'
import Hotel from './Hotel'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>AMEC || Travel</title>
            <meta name="description" content="AMEC Travel" />
        </Head>
        <Hero />
        <Visa />
        <Airline />
        <Hotel />
    </div>
  )
}
