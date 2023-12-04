import style from '../styles/Blogs.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useFetch from '../hooks/useFetch'

export default function BlogsList() {
    const { data: blogs, error } = useFetch('news')

    if (error) return <p>Error fetching blogs</p>;
    return (
        blogs && (
            <div className={style.blogs}>
                <div className={style.blogs__bg}></div>
                <h1>Blogs</h1>
                <div className={style.blogs__list}>
                    {blogs && blogs.data?.slice(0, 3).map((blog, index) => (
                        <div key={index} className={style.blog__item}>
                            <Image src={blog.image} alt={blog.title} width={300} height={200} quality={100} priority />
                            <div className={style.blog__content}>
                                <h3>{blog.title}</h3>
                                <p>{blog.snippet.slice(0, 250)}</p>
                            </div>
                            <div className={style.blog__read}>
                                <Link href={`/blogs/${blog._id}`}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href={'/blogs'} className={style.blogs__more}>More</Link>
            </div>
        )
    )
}
