import Head from "next/head"
import style from "../../styles/Exhibit.module.css"
import BookAStand from "./BookAStand"

export default function register() {
  return (
    <div className={style.main}>
      <Head>
        <title>AMEC || Register</title>
        <meta name="description" content="AMEC Register" />
      </Head>
      <BookAStand />
    </div>
  )
}
