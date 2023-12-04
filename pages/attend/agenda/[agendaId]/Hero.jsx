import Image from "next/image"
import style from "../../../../styles/Attend.module.css"

export default function Hero({title, image}) {
  return (
    <div className={`${style.hero} ${style.hero__a}`}>
        <Image src={image} alt={title} width={1500} height={1000} quality={100} priority/>
        <h1>{title}</h1>
    </div>
  )
}
