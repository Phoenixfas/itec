import Head from 'next/head'
import style from '../../../styles/Attend.module.css'
import Hero from '../Hero'
import ExhibitionProfile from './ExhibitionProfile'
import ViewProfileModal from './ViewProfileModal'

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC || Exhibition Profile</title>
            <meta name="description" content="ITEC Exhibition Profile" />
        </Head>
        <Hero title={'Exhibition Profile'} />
        <ExhibitionProfile />
        <ViewProfileModal />
    </div>
  )
}
