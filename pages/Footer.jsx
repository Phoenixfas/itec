import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaXTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa6'
import postReq from '../hooks/postReq'

export default function Footer() {

    const [toggled, setToggled] = useState(false)
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const subscribe = async (e) => {
        e.preventDefault()
        setMsg("Please wait...")
        if (email === "") {
            setMsg("Please enter your email address")
            return
        }

        try {
            const res = await postReq('subscribers', {email})
            if (res.success) {
                setMsg("Subscribed successfully")
                setEmail('')
                return
            } else {
                setMsg("An error occured, please try again")
                return
            }
        } catch (error) {
            console.log(error)
            setMsg("An error occured, please try again")
        }
    }

  return (
    <div className='footer'>
        <div className="footer__top">
            <div className="footer__col">
                <div>
                    <h2>About Itec</h2><br />
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quasi.</p>
                </div>
                    
                <div className="footer__socials">
                    <Link href={"https://twitter.com/AMEC_K"}><FaXTwitter /></Link>
                    <Link href={"https://www.facebook.com/profile.php?id=61550781255456"}><FaFacebook /></Link>
                    <Link href={"https://www.linkedin.com/company/amec2/"}><FaLinkedin /></Link>
                    <Link href={"https://www.instagram.com/amec_24/"}><FaInstagram /></Link>
                </div>
                
            </div>
            <div className="footer__col">
                <h3>Quick Links</h3>
                <Link href={"/exhibit/book-a-stand"} className="footer__nav__link">
                    Book a Stand
                </Link>
                <Link href={"/register"} className="footer__nav__link">
                    Register for Free
                </Link>
                <Link href={"/exhibit"} className="footer__nav__link">
                    Exhibit
                </Link>
                <Link href={"/travel"} className="footer__nav__link">
                    Travel
                </Link>
                <Link href={"/attend/agenda"} className="footer__nav__link">
                    Attend
                </Link>
                <Link href={"/learn/organizer"} className="footer__nav__link">
                    Learn
                </Link>
            </div>
            <div className="footer__col">
                <div>
                    <h3>Customer Service</h3>
                    <b><Link href={"mailto:support@itec.com"} className='list_style'>Visitor and Registration Inquiries</Link></b>
                </div>
                <div>
                    <b><Link href={"mailto:sales@itec.com"} className='list_style'>Sales Inquiry</Link></b>
                </div>
                <div>
                    <b><Link href={"mailto:marketing@itec.com"} className='list_style'>Marketing Inquiry</Link></b>
                </div>
                <div>
                    <b><Link href={"mailto:conference@itec.com"} className='list_style'>Conferences</Link></b>
                </div>
            </div>
            <div className="footer__col">
                <Link href={"/exhibit/book-a-stand"} className="footer__btn">Book a Stand</Link>
                <Link href={"/register"} className="footer__btn">Register to Visit</Link>
                <Link href={"/exhibit/become-sponsor"} className="footer__btn">Become a Sponsor</Link>
            </div>
        </div>
        <div className="footer__bottom">
            <p className="textSmall"><Image src='/logo.png' alt='logo' width={100} height={100} quality={100} priority /></p>
            <p className="textSmall">&copy; 2023 AMEC. All rights reserved.</p>
        </div>
    </div>
  )
}

/*
<div>
                        <h2 style={{fontWeight: 500, marginBottom: "10px", cursor: "pointer"}} onClick={() => setToggled(false)}>Subscribe for newsletter</h2>
                        {msg !== "" && <p style={{color: "#fff", backgroundColor: "orange", padding: "5px 10px", width: "fit-content", borderRadius: "5px", marginBottom: "10px"}}>{msg}</p>}
                        <form className='footer__sub' onSubmit={subscribe}>
                            <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button style={{borderRadius: "5px", padding: "10px 20px", fontSize: "1rem", fontWeight: "700"}} type="submit" className="footer__btn footer__btn__dark" >Subscribe</button>
                        </form>
                    </div>
*/