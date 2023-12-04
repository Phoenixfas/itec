import Image from 'next/image'
import style from '../../styles/Travel.module.css'
import Link from 'next/link'

export default function Airline() {
  return (
    <div className={style.airline}>
        <div className={style.airline__l}>
            <h1>Rwanda Airlines: Premier Travel Partner for AMEC</h1>
            <p>Planning your visit to the African Medical Exhibition & Conference (AMEC) in Kigali just got more convenient with Rwanda Airlines. We&apos;re delighted to offer exclusive benefits to make your journey exceptional:</p>
            <Link href="https://www.rwandair.com/book/"> Book Now </Link>
        </div>
        <div className={style.airline__r}>
            <Image src="/images/resource/rwandair.jpg" width={500} height={500} alt="Rwanda Airline" quality={100} priority />
            <Image src="/images/resource/rwandair_cabin.jpg" width={500} height={500} alt="Rwanda Airline Cabin Crew" quality={100} priority />
        </div>
    </div>
  )
}
