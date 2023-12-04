import Image from "next/image";
import style from "../../styles/Exhibit.module.css";
import whyexhibit from "../../data/whyexhibit";
import Head from "next/head"

export default function whyId({why}) {
    return (
      <>
        <Head>
          <title>{`ITEC || ${why?.title}`}</title>
          <meta name="description" content={`${why?.description}`} />
        </Head>
        <div className={style.service}>
            {why && (
                <div className={style.serviceHolder}>
                    <h1>{why.title}</h1>
                    <Image
                        src={why.image}
                        alt={why.title}
                        width={600}
                        height={450}
                        priority
                        unoptimized
                        quality={100}
                    />
                    <div className={style.serviceContent}>
                        <p>{why.description}</p>
                    </div>
                </div>
            )}
        </div>
      </>
    );
  };


export async function getServerSideProps(context) {
    const { whyId } = context.query;
    const why = whyexhibit.find((why) => why.id === whyId);

    if (!why) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            why,
        },
    };
};