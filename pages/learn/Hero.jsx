import style from "../../styles/Attend.module.css"

export default function Hero({title}) {
  return (
    <div className={style.hero}>
        <h1>{title}</h1>
    </div>
  )
}
