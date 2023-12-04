import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import style from '../styles/Hero.module.css'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {

  return (
    <div className={`${style.hero}`}>
        <ParticlesBackground id={"1"} />
        <div className={style.hero__l}>
              <h1>The Biggest Tech Event</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aperiam adipisci, earum sapiente veniam odit nam cum eveniet doloremque sunt?</p>
              <div className={style.hero__buttons}>
                <Link href="/register">Register</Link>
                <Link href="/learn/organizer">Learn</Link>
              </div>
        </div>
        <div className={style.hero__r}>
            <div className={style.hero__gradient}></div>
            <Image src={'/images/home/hero/vr_headset2.png'} width={800} height={1000} quality={100} priority />
        </div>
    </div>
  )
}
