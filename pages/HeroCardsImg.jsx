import Image from 'next/image'
// import products from '../data/products'
import style from "../styles/Home.module.css"

export default function HeroCardsImg({features, dark}) {
  return (
    <>
        {features && features?.map((feature, index) => (
            <div key={index} className={`${style.hero__card} ${dark && style.dark__card}`}>
                {/* <div className={`${style.hero__cardText} ${dark && style.dark__text}`}> */}
                    <h2><span>{feature.title}</span></h2>
                    <p>{feature.description}</p>
                {/* </div> */}
            </div>
        ))}
    </>
  )
}