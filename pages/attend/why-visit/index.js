import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import Hero from '../Hero'
import WhyVisit from './WhyVisit'
import Features from './Features'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>AMEC || Why Visit</title>
            <meta name="description" content="AMEC Why Visit" />
        </Head>
        <Hero title={'Why Visit?'} />
        <WhyVisit />
        <Features />
    </div>
  )
}
