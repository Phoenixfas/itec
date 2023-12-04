import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import Hero from '../Hero'
import SpeakersList from './SpeakersList'
import Description from '../../Description'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>AMEC || Speakers</title>
            <meta name="description" content="AMEC Speakers" />
        </Head>
        <Hero title={'Speakers'} />
        <SpeakersList />
        <Description />
    </div>
  )
}
