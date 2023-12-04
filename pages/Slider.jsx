import { useState, useEffect } from "react"
import style from "../styles/Home.module.css"
import features from "../data/features";
// import PassionSvg from "../public/images/svgs/passion_animated.svg"
// import NeedsSvg from "../public/images/svgs/needs_animated.svg"
// import WantsSvg from "../public/images/svgs/wants_animated.svg"
import HeroCardsImg from "./HeroCardsImg";
// import HeroCardsVid from "./HeroCardsVid";
import { BsChevronExpand } from "react-icons/bs"

export default function Hero() {
    useEffect(() => {
        const cardsElement = document.getElementById("cards");

        const cards = cardsElement.clientWidth;

      // Set the hero-cards width for the scrolling animation 
        const heroCards1 = document.getElementById("hero-cards1");
        const cardsLength1 = Math.round(features.length/2);
        const cardsWidth1 = cardsLength1 * 350;
        heroCards1.style.setProperty("--cards-width", -cards - 50 + "px");
        
        const heroCards2 = document.getElementById("hero-cards2");
        const cardsLength2 = Math.round(features.length/2);
        const cardsWidth2 = cardsLength2 * 350;
        heroCards2.style.setProperty("--cards-width", -cards - 50 + "px");

        const heroBack = document.getElementById("hero-back")
        const heroTouch = document.getElementById("hero-touch")
        // console.log(heroTouch)

        const hero = document.getElementById("hero")
        
        const onMove = (e) => {
            let pixel = e.clientX + "px";
            heroBack.style.setProperty("--xpos", pixel);
        }
          
        hero.addEventListener("mousemove", onMove)
        hero.addEventListener("touchmove", (e) => {
          let pixel = e.touches[0].clientX + "px";
          heroBack.style.setProperty("--xpos", pixel);
          heroTouch.style.left = pixel;
        })
        hero.addEventListener("click", (e) => {
          let pixel = e.x + "px";
          heroTouch.style.left = pixel;
        })

        return () => {
          hero.removeEventListener('mousemove', onMove);
          hero.removeEventListener('touchmove', (e) => {
            let pixel = e.touches[0].clientX + "px";
            heroBack.style.setProperty("--xpos", pixel);
            heroTouch.style.left = pixel;
          });
          hero.removeEventListener("click", (e) => {
            let pixel = e.x + "px";
            heroTouch.style.left = pixel;
          })
        }
        
      }, []);
      
      const firstFeatures = features.slice(0, Math.round(features.length/2));
      const secondfeatures = features.slice(Math.round(features.length/2), features.length);


  return (
    <div className={style.hero} id="hero">
        
        <div id="hero-back" className={style.hero__back}>
        <div className={`${style.hero__title} ${style.dark}`}>
            <h1>Features of the Event</h1>
        </div>
        <div className={style.hero__cardsHolder}>
            <div id="hero-cards1" className={style.hero__cardsContainer}>
                <div id="cards" className={style.hero__cards}>
                    <HeroCardsImg features={firstFeatures} dark={true} />
                    <HeroCardsImg features={firstFeatures} dark={true} />
                </div>
                <div className={style.hero__cards}>
                    <HeroCardsImg features={firstFeatures} dark={true} />
                    <HeroCardsImg features={firstFeatures} dark={true} />
                </div>
            </div>
        </div>
        </div>

        <div id="hero-front" className={style.hero__front}>
        <div className={`${style.hero__title}`}>
            <h1>Features of the Event</h1>
        </div>
        <div className={style.hero__cardsHolder}>
            <div id="hero-cards2" className={style.hero__cardsContainer}>
                <div id="cards" className={style.hero__cards}>
                    <HeroCardsImg features={firstFeatures} dark={false} />
                    <HeroCardsImg features={firstFeatures} dark={false} />
                </div>
                <div className={style.hero__cards}>
                    <HeroCardsImg features={firstFeatures} dark={false} />
                    <HeroCardsImg features={firstFeatures} dark={false} />
                </div>
            </div>
        </div>

        <div id="hero-touch" className={style.hero__backTouch}><BsChevronExpand size={25} color="#1A3D52" /></div>

        </div>

    </div>
  )
}