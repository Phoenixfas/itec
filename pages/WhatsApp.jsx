import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import { useEffect } from "react"

export default function WhatsApp() {

    useEffect(() => {
        const wa = document.getElementById("whatsapp")
        const scroll = () => {
            if (window.scrollY > 500) {
                wa.style.setProperty("--whatsappX", "0px")
            } else {
                wa.style.setProperty("--whatsappX", "calc(100% + 20px)")
            }
        }
        window.addEventListener("scroll", scroll)
        return () => {
            window.removeEventListener("scroll", scroll)
        }
    } , [])

  return (
    <div id="whatsapp" className="whatsapp">
        <Link href={"https://wa.me/+971504582670"}>
            <FaWhatsapp size={30} />
            Chat on WhatsApp
        </Link>
    </div>
  )
}
