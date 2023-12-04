import style from '../../../styles/Attend.module.css'
// import speakers from '../../../data/speakers'
import Image from 'next/image'
import useFetch from '../../../hooks/useFetch'


export default function SpeakersList() {
    const { data: speakers, error } = useFetch('speakers')

  return (
    <div className={style.speakers}>
        <div className={style.speakers__bg}></div>
        {/* <div className={style.speakers__left}>
            <h1>Hear global leaders debate, challenge and scrutinise the medical paradigm of the future</h1>
        </div> */}
        <div className={style.speakers__right}>
            <div className={style.speakers__con}>
                {speakers && speakers?.data.map((speaker, index) => (
                    <div className={style.speakers__card} key={index}>
                        <div className={style.speakers__card__img}>
                            <Image src={speaker.profile_pic} alt={speaker.first_name} width={600} height={900} quality={100} priority />
                        </div>
                        <div className={style.speakers__card__content}>
                            <h3>{speaker.first_name.charAt(0).toUpperCase() + speaker.first_name.slice(1) + " " + speaker.last_name?.charAt(0).toUpperCase() + speaker.last_name.slice(1)}</h3>
                            <p style={{paddingBottom: "10px"}}><span>{speaker.job_title}</span></p>
                            <p>{speaker.company_name}</p>
                            <span><p>{speaker.type}</p></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
