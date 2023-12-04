import style from '../styles/Home.module.css'
import Image from 'next/image'
import mp from '../data/mp'
import useFetch from '../hooks/useFetch'
import Link from 'next/link'

export default function MediaPartners() {
    const { data: partners, error } = useFetch('partners')
  return ( partners &&
    <div className={style.mp}>
        <div className={style.mp__con}>
            <div className={style.mp__bg}></div>
            <div className={style.mp__content}>
                <h1>Media Partners</h1>
                <div className={style.mp__list}>
                    {partners && partners?.data?.map((partner, index) => (
                        <Link href={partner.url} key={index} className={style.mp__item} title={partner.name}>
                            <Image src={partner.logo} alt={partner.name} width={200} height={200} quality={100} priority />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
