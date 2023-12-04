import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import Hero from '../Hero'
import WhyVisit from './WhyVisit'
import Features from './Features'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC || Why Visit</title>
            <meta name="description" content="ITEC Why Visit" />
        </Head>
        <Hero title={'Why Visit?'} />
        <WhyVisit />
        <Features />
    </div>
  )
}
