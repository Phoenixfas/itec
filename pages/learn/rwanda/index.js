import Head from "next/head"
import style from "../../../styles/Learn.module.css"
import Hero from "./Hero"
import AbtRwanda from "./AbtRwanda"

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>AMEC || About Rwanda</title>
            <meta name="description" content="AMEC About Rwanda" />
        </Head>
        <Hero title={'About Rwanda'} />
        <AbtRwanda />
    </div>
  )
}
