import Head from 'next/head'
import style from '../../../../styles/Attend.module.css'
import Hero from '../../Hero'
import EPaginator from './EPaginator'
import ViewExhibitorModal from './ViewExhibitorModal'

export default function index() {
  return (
    <div style={{backgroundColor: "#eee"}} className={style.main}>
        <Head>
            <title>ITEC || Exhibitors List</title>
            <meta name="description" content="ITEC Exhibitors List" />
        </Head>
        <ViewExhibitorModal />
        <Hero title="All Exhibitors" />
        <EPaginator />
    </div>
  )
}
