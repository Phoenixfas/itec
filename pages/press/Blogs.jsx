import style from '../../styles/Blogs.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blogs({d}) {
  return (
    <div style={{paddingTop: "100px"}} className={style.blogs}>
        <div className={style.blogs__bg}></div>
        {/* <h1>Blogs</h1> */}
        <div style={{gap: "100px", maxWidth: "1200px"}} className={style.blogs__list}>
            {d && d?.map((blog, index) => (
                <div key={index} className={style.press__item}>
                    {/* <Image src={blog.image} alt={blog.title} width={300} height={200} quality={100} priority /> */}
                    <div className={style.press__content}>
                        <h3>{blog.title}</h3>
                        <p>{blog.snippet.slice(0, 250)}</p>
                    </div>
                    <div className={style.press__read}>
                        <Link href={`/press/${blog._id}`}>Read More</Link>
                    </div>
                </div>
            ))}
        </div>
        {/* <Link href={'/blogs'} className={style.blogs__more}>More</Link> */}
    </div>
  )
}
