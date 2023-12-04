import Link from "next/link"
import style from "../../../styles/Exhibit.module.css"
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'

export default function register() {
  return (
    <div className={style.success}>
      <h1>Thank you!</h1>
      <p>Thank you for your interest in the African Medical Exhibition & Conference. We have sent you a confirmation email with a qr code. Please keep this safe as you will need it to access the event.</p>
      <p>Below are the contact details for the respective teams should you require direct communication with them.</p>
      <p><b>Get Support:</b> <Link href={"mailto:help@amec.com"}>help@amec.com</Link></p>
      <p>Follow us on social media to stay in the loop with the latest industry insights and explore all that the African Medical Exhibition & Conference has to offer.</p>
      <div className={style.success__socials}>
        <Link href={"https://twitter.com/AMEC_K"}><FaXTwitter /></Link>
        <Link href={"https://www.facebook.com/profile.php?id=61550781255456"}><FaFacebook /></Link>
        <Link href={"https://www.linkedin.com/company/amec2/"}><FaLinkedin /></Link>
        <Link href={"https://www.instagram.com/amec_24/"}><FaInstagram /></Link>
      </div>
      <h2 style={{marginTop: "20px"}}><Link href={"/files/Lorem_ipsum.pdf"} download={true} className="dropdown__item" onClick={() => toggleMobile()}>Download the Brochure</Link></h2>
    </div>
  )
}
