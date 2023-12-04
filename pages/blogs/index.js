import Head from "next/head"
import style from "../../styles/Blogs.module.css"
import Hero from "./Hero"
import BlogPaginator from "./BlogPaginator"

export default function exhibit() {
  return (
    <div className={style.main}>
      <Head>
        <title>AMEC || Blogs</title>
        <meta name="description" content="AMEC Blogs" />
      </Head>
      <Hero />
      <BlogPaginator />
    </div>
  )
}
