import Head from 'next/head'
import style from '../../styles/Attend.module.css'
import Hero from './Hero'
import ExhibitorsList from './ExhibitorsList'
import CAgenda from './CAgenda'
import VenueMap from './VenueMap'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC | Attend</title>
            <meta name="description" content="ITEC Attend" />
        </Head>
        <Hero title={'Exhibit'} />
        <ExhibitorsList />
        <CAgenda />
        <VenueMap />
    </div>
  )
}
