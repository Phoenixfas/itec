import Image from "next/image"
import style from "../styles/Home.module.css"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useInView, useAnimationControls } from "framer-motion"
import { TfiBarChart } from "react-icons/tfi";
import { IoPeople } from "react-icons/io5";
import Link from "next/link";

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

const variants2 = {
    visible: { opacity: 1, x: 0, transition: { duration: .3, damping: 7, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, x: -100, transition: { duration: .3, damping: 7, bounce: 0.8, type: "spring" } }
}
const variants3 = {
    visible: { opacity: 1, x: 0, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, x: 100, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } }
}

export default function Description() {
    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px  -300px 0px", once: true})
    const controls = useAnimationControls()


    const [current, setCurrent] = useState(0)
    const length = 3

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
        const desc1 = document.getElementById("desc_1")
        const desc2 = document.getElementById("desc_2")
        const desc3 = document.getElementById("desc_3")

        const changeDesc = () => {
            if (current === 0) {
                desc1.style.setProperty("--desc-opacity", 1)
                desc2.style.setProperty("--desc-opacity", 0)
                desc3.style.setProperty("--desc-opacity", 0)
            } else if (current === 1) {
                desc1.style.setProperty("--desc-opacity", 0)
                desc2.style.setProperty("--desc-opacity", 1)
                desc3.style.setProperty("--desc-opacity", 0)
            } else if (current === 2) {
                desc1.style.setProperty("--desc-opacity", 0)
                desc2.style.setProperty("--desc-opacity", 0)
                desc3.style.setProperty("--desc-opacity", 1)
            }
        }

        const interval = setInterval(() => {
                if (current === length - 1) {
                    setCurrent(0)
                } else {
                    setCurrent(current + 1)
                }
                changeDesc()
        }, 7000)

        return () => clearInterval(interval)
    }, [current, isInView, controls])



  return (
    <div ref={ref} className={style.desc}>
        <motion.div variants={variants3} animate={controls} className={style.desc__left}>
            {/* <AnimatePresence> */}
                {/* {current === 0 && ( */}
                    <div id="desc_1" className={style.desc__img}>
                        <Image src="/images/resource/Kigali-Convention-Centre1.jpg" alt="doctors" width={2000} height={2000} quality={100} priority />
                    </div>
                {/* )} */}
                {/* {current === 1 && ( */}
                    <div id="desc_2" variants={variants} initial="initial" animate="animate" exit="exit" className={style.desc__img}>
                        <Image src="/images/resource/illume_orig.jpg" alt="event" width={2000} height={2000} quality={100} priority />
                    </div>
                {/* )} */}
                {/* {current === 2 && ( */}
                    <div id="desc_3" variants={variants} initial="initial" animate="animate" exit="exit" className={style.desc__img}>
                        <Image src="/images/resource/Kigali-Convention-Centre.jpg" alt="valley" width={2000} height={2000} quality={100} priority />
                    </div>
                {/* )} */}
            {/* </AnimatePresence> */}
        </motion.div>
        <motion.div variants={variants2} animate={controls} className={style.desc__right}>
            <div className={style.desc__content}>
                <h3><span>About The Event</span></h3>
                <h1>Learn The Newest Strategy Of The Technology Industry</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p><br />
                <h3>Our Main Focus in The Event</h3>
                <br />
                <div className={style.desc__event}>
                    <div className={style.desc__event__item}>
                        <span className={style.desc__icon}><TfiBarChart /></span>
                        <div className={style.desc__event__inner}>
                            <h3>Growing The Industry</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className={style.desc__event__item}>
                        <span className={style.desc__icon}><IoPeople /></span>
                        <div className={style.desc__event__inner}>
                            <h3>Connecting People</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className={style.desc__buttons}>
                    <Link href="/exhibit/book-a-stand">Book a Stand</Link>
                    <Link href="/attend/agenda">Explore</Link>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
