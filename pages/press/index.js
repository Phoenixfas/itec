import Head from "next/head"
import style from "../../styles/Blogs.module.css"
import Hero from "./Hero"
import BlogPaginator from "./BlogPaginator"

export default function exhibit() {
  return (
    <div className={style.main}>
      <Head>
        <title>ITEC || Blogs</title>
        <meta name="description" content="ITEC Blogs" />
      </Head>
      <Hero />
      <BlogPaginator />
    </div>
  )
}
