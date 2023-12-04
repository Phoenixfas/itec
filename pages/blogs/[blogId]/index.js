import Image from "next/image";
import style from "../../../styles/Exhibit.module.css";
import Head from "next/head"

export default function blogId({blog}) {
    return (
      <>
        <Head>
          <title>{`ITEC || ${blog?.title}`}</title>
          <meta name="description" content={`${blog?.snippet}`} />
        </Head>
        <div className={style.service}>
            {blog && (
                <div className={style.serviceHolder}>
                    <h1>{blog.title}</h1>
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={600}
                        height={450}
                        priority
                        unoptimized
                        quality={100}
                    />
                    <div className={style.serviceContent}>
                        <p>{blog.snippet}</p>
                    </div>
                    <div
                        className={style.serviceContent}
                        dangerouslySetInnerHTML={{ __html: blog.sanitizedHtml }}
                    ></div>
                </div>
            )}
        </div>
      </>
    );
  };


export async function getServerSideProps(context) {
    const { blogId } = context.query;
    const blog = await fetch(`https://dashboard.afriopia.com/api/news/${blogId}`)
        .then((res) => res.json())
        .then((data) => data.data)
        .catch((err) => console.log(err));

    if (!blog) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            blog,
        },
    };
};