import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import Hero from '../Hero'
import SpeakersList from './SpeakersList'
import Description from '../../Description'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC || Speakers</title>
            <meta name="description" content="ITEC Speakers" />
        </Head>
        <Hero title={'Speakers'} />
        <SpeakersList />
        <Description />
    </div>
  )
}
