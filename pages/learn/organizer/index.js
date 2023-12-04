import BlogsList from "../../BlogsList"
import style from "../../../styles/Learn.module.css"
import Hero from "../Hero"
import AbtOrganizer from "./AbtOrganizer"
import Head from "next/head"

export default function index() {
  return (
    <div className={style.main}>
        <Head>
            <title>ITEC || About Organizer</title>
            <meta name="description" content="ITEC About Organizer" />
        </Head>
        <Hero title={'About the Organizer'} />
        <AbtOrganizer />
        <BlogsList />
    </div>
  )
}
