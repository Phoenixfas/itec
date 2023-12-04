import Image from 'next/image'
import style from '../../../styles/Home.module.css'
import exhibitors from '../../../data/exhibitors'
import Link from 'next/link'

export default function ExhibitorsList() {
  return (
    <div style={{background: "#fff", overflow: "hidden"}} className={style.exhibitors}>
        <div style={{overflow: "visible"}} className={style.exhibitors__con}>
            <div className={style.exhibitors__bg}></div>
            <div className={style.exhibitors__content}>
                {/* <h1>Exhibitors</h1> */}
                <div className={style.exhibitors__list}>
                    {exhibitors && exhibitors?.slice(0, 9).map((exhibitor, index) => (
                        <div key={index} className={style.exhibitors__item}>
                            <Image src={exhibitor.logo} alt={exhibitor.name} width={200} height={200} quality={100} priority />
                            <h3>{exhibitor.name}</h3>
                            <p>{exhibitor.description}</p>
                        </div>
                    ))}
                </div>
                <Link href={'/attend/exhibitors/all'} className={style.exhibitors__more}>See all exhibitors</Link>
            </div>
        </div>
    </div>
  )
}
