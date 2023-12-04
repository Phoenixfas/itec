import Head from 'next/head'
import style from '../../../styles/Exhibit.module.css'
import BecomeSponsor from './BecomeSponsor'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC || Become a Sponsor</title>
            <meta name="description" content="ITEC Become a Sponsor" />
        </Head>
        <BecomeSponsor />
    </div>
  )
}
