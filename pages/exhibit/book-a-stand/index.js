import Head from 'next/head'
import style from '../../../styles/Exhibit.module.css'
import BookAStand from './BookAStand'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>AMEC || Book a Stand</title>
            <meta name="description" content="AMEC Book a Stand" />
        </Head>
        <BookAStand />
    </div>
  )
}
