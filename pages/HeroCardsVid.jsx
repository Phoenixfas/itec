import Image from 'next/image'
// import products from '../data/products'
import style from "../styles/Home.module.css"

export default function HeroCardsVid({features, dark}) {
  return (
    <>
        {features && features?.map((feature, index) => (
            <div key={index} className={style.hero__card}>
                <video src={feature.video} autoPlay loop muted playsInline></video>
            </div>
        ))}
    </>
  )
}