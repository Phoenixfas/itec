import Link from 'next/link'
import style from '../../styles/Attend.module.css'

export default function VenueMap() {
  return (
    <div className={style.vm}>
        <div className={style.vm__container}>
            <h1>Venue Map</h1>
            <Link href={"/files/lorem_ipsum.pdf"}>Download</Link>
        </div>
    </div>
  )
}
