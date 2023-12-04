import Head from "next/head"
import style from "../../../styles/Learn.module.css"
import Hero from "../Hero"
import ContactUs from "./ContactUs"

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>AMEC || Contact Us</title>
            <meta name="description" content="AMEC Contact Us" />
        </Head>
        <Hero title={'Contact Us'} />
        <ContactUs />
    </div>
  )
}
