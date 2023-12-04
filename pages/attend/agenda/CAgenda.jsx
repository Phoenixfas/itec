import style from '../../../styles/Attend.module.css'
import Link from 'next/link'
import { BsCalendarEvent } from "react-icons/bs";
// import businessCorner from '../../data/businessCorner'
import conferenceAgenda from '../../../data/conferenceAgenda';

export default function CAgenda() {
    const day1 = conferenceAgenda.find(e => e.id === 1)
    const day2 = conferenceAgenda.find(e => e.id === 2)
    // const day3 = conferenceAgenda.find(e => e.id === 3)
    // console.log({day1: day1.date, day2: day2.date, day3: day3.date})

    return (
        <div className={style.agenda}>
            <div className={style.agenda_content}>
                <div className={style.agenda_content_t}>
                    {/* <p>{feature?.long_desc}</p> */}
                    {/* <h1>Conference Agenda</h1> */}
                </div>
                <div className={style.agenda_content_b}>


                    <div className={style.agenda_card_container}>
                        <h1><BsCalendarEvent size={25} /> Day 1</h1>
                        <div className={style.agenda_card_c}>
                            {day1.activities.map( (activity, index) =>
                                <div key={index} className={style.agenda_card}>
                                    <h3 style={{width: "100%", fontWeight: 300, textAlign: "center", marginBottom: "10px"}}>{activity.time}</h3>
                                    <div className={style.agenda_card_title}>{activity.name}</div>
                                    {/* <div className={style.agenda_card_desc}>{activity.description.slice(0, 100)}</div> */}
                                    <Link href={`/attend/agenda/${activity.order}`}><div className={style.agenda_card_button} >More</div></Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={style.agenda_card_container}>
                        <h1><BsCalendarEvent size={25} /> Day 2</h1>
                        <div className={style.agenda_card_c}>
                            {day2.activities.map( (activity, index) =>
                                <div key={index} className={style.agenda_card}>
                                    <h3 style={{width: "100%", fontWeight: 300, textAlign: "center", marginBottom: "10px"}}>{activity.time}</h3>
                                    <div className={style.agenda_card_title}>{activity.name}</div>
                                    {/* <div className={style.agenda_card_desc}>{activity.description.slice(0, 100)}</div> */}
                                    <Link href={`/attend/agenda/${activity.order}`}><div className={style.agenda_card_button} >More</div></Link>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
