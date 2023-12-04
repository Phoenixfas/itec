import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import Hero from '../Hero'
import ExhibitorsList from './ExhibitorsList'
import MediaPartners from '../../MediaPartners'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC || Exhibitors List</title>
            <meta name="description" content="ITEC Exhibitors List" />
        </Head>
        <Hero title={'Exhibitors List'} />
        <ExhibitorsList />
        <MediaPartners />
    </div>
  )
}
