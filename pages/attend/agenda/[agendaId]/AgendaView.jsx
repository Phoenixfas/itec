import style from "../../../../styles/Attend.module.css"

export default function AgendaView({activity, day}) {
  return (
    <div className={style.whyVisit}>
        <div className={style.whyVisit__con}>
            <h2>{day?.date}</h2>
            <h3 style={{textAlign: "center"}}>{activity?.time}</h3>
            <p style={{textAlign: "justify"}}>{activity?.description}</p>
            {/* <ul>
                <li><span></span> </li>
                <li><span></span> </li>
                <li><span></span> </li>
                <li><span></span> </li>
            </ul> */}
        </div>
    </div>
  )
}
