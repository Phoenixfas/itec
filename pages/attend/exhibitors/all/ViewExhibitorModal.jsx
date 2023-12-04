import style from "../../../../styles/Attend.module.css";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { toggleBlogModal } from '../../../../redux/slices/blogModalToggleSlice'
import { GrClose } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};


export default function ViewExhibitorModal() {
  const dispatch = useAppDispatch();
  const eventModalToggle = useAppSelector((state) => state.blogModalToggle.value);
  const eventData = useAppSelector((state) => state.activeExhibitor);


  return (
    <>
      <AnimatePresence>
        {eventModalToggle && (
          <motion.div
            variants={variants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            className={style.eventModal}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className={style.eventModal__con}
            >
              <div
                className={style.eventModal__close}
                onClick={() => dispatch(toggleBlogModal())}
              >
                <GrClose />
              </div>
              <div style={{ width: "100%" }}>
                <h1 className={style.eventModal__title}>{eventData.company_name}</h1>
                {/* <p className={style.eventModal__date}>
                  Date: {new Date(eventData.date).toDateString()}
                </p>
                <p className={style.eventModal__time}>
                  Time: {eventData.time}
                </p> */}
                <p className={style.eventModal__location}>
                  Location: {eventData.vendor_loc}
                </p>
                <div className={style.eList__sectors}>
                    {eventData.sectors.map((s, i) => (
                        <p key={i}>{s}</p>
                    ))}
                </div>
                <Image
                  src={eventData.logo}
                  alt={eventData.company_name}
                  width={800}
                  height={400}
                  className={style.eventModal__img}
                />
                <Link style={{marginTop: "50px", color: "#22c55e", fontSize: "1.2rem"}} href={`https://${eventData.company_website}`}> Visit Website </Link>
                <p className={style.eventModal__desc}>{eventData.description}</p>
                <div className={style.eventModal__products}>
                  <h2>Products</h2>
                  <ul>
                    {eventData.products.map((p, i) => (
                      <li key={i}>
                        <Image src={p.image} alt={p.name} width={200} height={200} quality={100} priority/>
                        <h3>{p.name}</h3>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={style.eventModal__products}>
                  <h2>Videos</h2>
                  <ul>
                    {eventData.videos.map((v, i) => (
                      <li key={i}>
                        <iframe width="100%" height="100%" src={v} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
