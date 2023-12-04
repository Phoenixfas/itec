import Image from 'next/image'
import style from '../../styles/Travel.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Hotel() {
    const options = { delay: 7000 } // Options
    const autoplayRoot = (emblaRoot) => emblaRoot.parentElement // Root node
    // @ts-ignore
    const autoplay = Autoplay(options, autoplayRoot)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])


    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])

  return (
    <div className={style.hotel}>
        <h1>Hotel Booking</h1>
        <div ref={emblaRef} className={`${style.embla}`}>
            <div  className={`${style.embla__container}`}>
                <div className={`${style.embla__slide}`}>
                    <Image src="/images/resource/marriott.jpg" width={1200} height={900} alt='Marriott Hotel Kigali' quality={100} priority />
                    <div className={style.hotel__content}>
                        <h2>Marriott Hotel Kigali</h2>
                        <p>Discover the heart of Rwanda&apos;s capital at the Kigali Marriott Hotel, strategically positioned in close proximity to the Nyarugenge financial district and the Kigali Convention Center. Our exceptional 5-star luxury hotel offers generously sized, contemporary lodgings equipped with first-rate facilities and top-tier services. Unwind in chic guest rooms or opulent suites boasting expansive windows, well-appointed bathrooms, and sumptuous, pillow-top bedding.</p>
                        <Link href="https://www.marriott.com/en-us/hotels/kglmc-kigali-marriott-hotel/overview/">Book Now</Link>
                    </div>
                </div>
                <div className={`${style.embla__slide}`}>
                    <Image src="/images/resource/radisson.jpg" width={1200} height={900} alt='Marriott Hotel Kigali' quality={100} priority />
                    <div className={style.hotel__content}>
                        <h2>Radisson Blu Hotel & Convention Centre Kigali</h2>
                        <p> Radisson Blu Hotel & Convention Centre Kigali is a 5-star hotel in Kigali, the capital of Rwanda. The hotel is located near the airport and the Kigali Convention Centre. The hotel has 292 rooms and suites, 2 restaurants, 2 bars, a spa, a fitness centre, a swimming pool, and a business centre. The hotel also has a convention centre with a capacity of 5,000 people.</p>
                        <Link href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-convention-kigali">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
