import Image from 'next/image'
import style from '../styles/Home.module.css'
import Link from 'next/link'
import useFetch from '../hooks/useFetch'
import { useState, useEffect } from 'react'

export default function Partners() {
    const [goldSponsors, setGoldSponsors] = useState([])
    const [silverSponsors, setSilverSponsors] = useState([])
    const [bronzeSponsors, setBronzeSponsors] = useState([])
    const { data: sponsors, error } = useFetch('sponsors')

    useEffect(() => {
        if (sponsors) {
            setGoldSponsors(sponsors.data.filter((sponsor) => sponsor.approved).filter((s) => s.type === 'gold'))
            setSilverSponsors(sponsors.data.filter((sponsor) => sponsor.approved).filter((s) => s.type === 'silver'))
            setBronzeSponsors(sponsors.data.filter((sponsor) => sponsor.approved).filter((s) => s.type === 'bronze'))
        }
    }, [sponsors])

    if (goldSponsors.length === 0 && silverSponsors.length === 0 && bronzeSponsors.length === 0) {
        return null
    }
    
  return ( sponsors &&
    <div className={style.partners}>
        {goldSponsors && goldSponsors.length > 0 && <div className={style.partners__con}>
            <h1>Gold Sponsors</h1>
            <div className={style.partners__list}>
                {goldSponsors.map((sponsor, index) => (
                    <Link key={index} href={sponsor.company_website ? sponsor.company_website : ""} className={style.partner__item}>
                        <Image src={sponsor.logo} alt={sponsor.company_name} width={200} height={200} quality={100} priority />
                    </Link>
                ))}
            </div>
        </div>}
        {silverSponsors && silverSponsors.length > 0 && <div className={style.partners__con}>
            <h1>Silver Sponsors</h1>
            <div className={style.partners__list}>
                {silverSponsors.map((sponsor, index) => (
                    <Link key={index} href={sponsor.company_website ? sponsor.company_website : ""} className={style.partner__item}>
                        <Image src={sponsor.logo} alt={sponsor.company_name} width={200} height={200} quality={100} priority />
                    </Link>
                ))}
            </div>
        </div>}
        {bronzeSponsors && bronzeSponsors.length > 0 && <div className={style.partners__con}>
            <h1>Bronze Sponsors</h1>
            <div className={style.partners__list}>
                {bronzeSponsors.map((sponsor, index) => (
                    <Link key={index} href={sponsor.company_website ? sponsor.company_website : ""} className={style.partner__item}>
                        <Image src={sponsor.logo} alt={sponsor.company_name} width={200} height={200} quality={100} priority />
                    </Link>
                ))}
            </div>
        </div>}
    </div>
  )
}
