import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import CAgenda from './CAgenda'
import Hero from '../Hero'
import BlogsList from '../../BlogsList'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC | Conference Agenda</title>
            <meta name="description" content="ITEC Conference Agenda" />
        </Head>
        <Hero title={'Conference Agenda'} />
        <CAgenda />
        <BlogsList />
    </div>
  )
}
