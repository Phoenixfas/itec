import style from "../../../styles/Attend.module.css";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { toggleBlogModal } from '../../../redux/slices/blogModalToggleSlice'
import { GrClose } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};


export default function ViewProfileModal() {
  const dispatch = useAppDispatch();
  const eventModalToggle = useAppSelector((state) => state.blogModalToggle.value);
  const eventData = useAppSelector((state) => state.activeProfile);


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
                <h1 className={style.eventModal__title}>{eventData.name}</h1>
                <Image
                  src={eventData.image}
                  alt="Exhibition Profile"
                  width={800}
                  height={400}
                  className={style.eventModal__img}
                />
                <div className={style.eList__sectors}>
                    {eventData.list.map((s, i) => (
                        <p key={i}>{s}</p>
                    ))}
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
