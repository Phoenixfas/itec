import Head from "next/head"
import style from "../../styles/Exhibit.module.css"
import BookAStand from "./BookAStand"

export default function register() {
  return (
    <div className={style.main}>
      <Head>
        <title>ITEC || Register</title>
        <meta name="description" content="ITEC Register" />
      </Head>
      <BookAStand />
    </div>
  )
}
