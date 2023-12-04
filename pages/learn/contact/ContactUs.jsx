import Link from "next/link"
import style from "../../../styles/Learn.module.css"
import { MdCall } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className={style.contact}>
        <div className={style.contact__con}>
            {/* <Link href="tel:+9715646474686" className={style.contact__card}>
                <h2>For Local</h2>
                <MdCall size={60} />
                <p> +9715646474686 </p>
            </Link> */}
            <Link href="tel:+919987846231" className={style.contact__card}>
                <h2>For International</h2>
                <MdCall size={60} />
                <p> +919987846231 </p>
            </Link>
            <Link href="tel:+250791701703" className={style.contact__card}>
                <h2>For Africa</h2>
                <MdCall size={60} />
                <p> +250791701703 </p>
            </Link>
        </div>
    </div>
  )
}
