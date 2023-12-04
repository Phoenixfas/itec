import Head from "next/head"
import style from "../../styles/Exhibit.module.css"
import Hero from "./Hero"
import WhyExhibit from "./WhyExhibit"
// import BookAStand from "./BookAStand"
import BecomeSponsor from "./BecomeSponsor"

export default function exhibit() {
  return (
    <div className={style.main}>
      <Head>
        <title>AMEC || Exhibit</title>
        <meta name="description" content="AMEC Exhibit" />
      </Head>
      <Hero />
      <WhyExhibit />
      {/* <BookAStand /> */}
      {/* <BecomeSponsor /> */}
    </div>
  )
}
