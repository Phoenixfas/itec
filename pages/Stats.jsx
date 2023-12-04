import style from "../styles/Home.module.css"
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'


const variants1 = {
    visible: { opacity: 1, y: 0, transition: { duration: .7, } },
    hidden: { opacity: 0, y: 100, transition: { duration: .7, } }
}

const variants2 = {
    visible: { opacity: 1,  transition: { duration: .3,  } },
    hidden: { opacity: 0,  transition: { duration: .3,  } }
}

const variants3 = {
    visible: { opacity: 1, y: 0, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } },
    hidden: { opacity: 0, y: 100, transition: { duration: .5, delay: .3, damping: 7, bounce: 0.8, type: "spring" } }
}

const variants4 = {
    visible: { opacity: 1,  transition: { duration: .7, delay: .7 } },
    hidden: { opacity: 0,  transition: { duration: .7, delay: .7 } }
}

export default function Stats() {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "0px 0px  -300px 0px", once: true})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
      }, [isInView, controls]);

  return (
    <div ref={ref} className={style.stats}>
        <motion.div variants={variants1} animate={controls} className={style.stats__container}>
            <div className={style.stats__content}>
                <h2>250+</h2>
                <p>EXHIBITORS</p>
            </div>
            <div className={style.stats__content}>
                <h2>55+</h2>
                <p>COUNTRIES</p>
            </div>
            <div className={style.stats__content}>
                <h2>50+</h2>
                <p>SPEAKERS</p>
            </div>
            <div className={style.stats__content}>
                <h2>20+</h2>
                <p>WORKSHOPS</p>
            </div>
        </motion.div>
    </div>
  )
}
