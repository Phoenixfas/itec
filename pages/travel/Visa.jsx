import Link from 'next/link';
import style from '../../styles/Travel.module.css';

export default function Visa() {
  return (
    <div className={style.visa}>
        <div className={style.visa__con}>
            <h1>Visa Support for AMEC in Kigali</h1>
            <div className={style.visa__content}>
                <div className={style.visa__content__l}>
                    <p>Planning to attend the African Medical Exhibition and Conference (AMEC) in Kigali? We&apos;ve got your back! We understand that visa procedures can sometimes be daunting, so we&apos;re here to make it easier for you.</p>
                </div>
                <div className={style.visa__content__r}>
                    <p>When you register for AMEC, our dedicated team will provide you with a personalized visa support package. This includes an official invitation letter to assist with your visa application process. We&apos;re committed to ensuring your journey to Kigali is as smooth as possible.</p>
                </div>
            </div>
            <div className={style.visa__contact}>
                <h3>Please contact</h3>
                <Link href="mailto:visasupport@amec.com">visasupport@amec.com</Link>
                <p>John Doe</p>
                <Link href={`tel:+971123456789`}>+971123456789</Link>
            </div>
        </div>
    </div>
  )
}
