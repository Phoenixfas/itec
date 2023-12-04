import Image from 'next/image'
import style from '../../../../styles/Attend.module.css'
import { useAppDispatch } from '../../../../redux/hooks'
import { toggleBlogModal } from '../../../../redux/slices/blogModalToggleSlice'
import { changeActiveExhibitor } from '../../../../redux/slices/activeExhibitorSlice'

export default function EList({d}) {
    const dispatch = useAppDispatch()
  return (
    <div className={style.eList}>
        {d && d.map((e, index) => (
            <div key={index} className={style.eList__row}>
                <Image src={e.logo} alt={e.company_name} width={200} height={200} quality={100} priority/>
                <div className={style.eList__content}>
                    <h3>{e.company_name}</h3>
                    <p>{e.vendor_loc}</p>
                    <p><span>{e.country}</span></p>
                    <p>{e.description}</p>
                    <div className={style.eList__sectors}>
                        {e.sectors.map((s, i) => (
                            <p key={i}>{s}</p>
                        ))}
                    </div>
                </div>
                <div className={style.eList__btn} onClick={() => {
                    dispatch(changeActiveExhibitor(e))
                    dispatch(toggleBlogModal())
                }}>View Profile</div>
            </div>
        ))}
    </div>
  )
}
