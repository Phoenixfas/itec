import Image from "next/image"
import style from "../../../styles/Learn.module.css"

export default function AbtOrganizer() {
  return (
    <div className={style.organizer}>
        <div className={style.organizer__top}>
            <h2>Who we are</h2>
            <p>Welcome to E3 International Ltd, your premier partner in the vibrant and dynamic world of Meetings, Incentives, Conferences, and Exhibitions (MICE) in Kigali, Rwanda.</p>
            <p>E3 International Ltd is a Kigali-based establishment that specializes in the entire spectrum of MICE services. From meticulously planning and executing conferences to curating exhibitions that showcase the best of Kigali and Rwanda, we are a one-stop solution for all your MICE needs.</p>
            <p>Our team comprises industry veterans and individuals with extensive experience in planning and executing successful MICE events worldwide. Our knowledge and insights enable us to offer innovative solutions, ensuring that every event we organize is a resounding success.</p>
        </div>
        <div className={style.organizer__bottom}>
            <h2>What We Do</h2>
            <ul>
                <li><span>Conference Management:</span> We excel in creating seamless and engaging conference experiences. From selecting the perfect venue and arranging accommodations to managing registration and coordinating logistics, we handle every detail to perfection.</li>
                <li><span>Exhibition Services:</span> Our expert team can transform any space into a captivating exhibition arena. We curate exhibitions that highlight the culture, business opportunities, and innovations in Rwanda.</li>
                <li><span>Destination Management:</span> As locals, we possess an in-depth understanding of Kigali and Rwanda, allowing us to offer personalized destination management services that enhance the experience of conference participants.</li>
                <li><span>Customized Solutions:</span> We recognize that every event is unique. Therefore, we tailor our services to meet the specific needs and objectives of each client, ensuring a personalized and memorable experience.</li>
            </ul>
            <div className={style.organizer__bottom__img}>
                <Image src="/images/resource/icca.png" width={500} height={500} alt="member of icca" priority quality={100} />
                <Image src="/images/resource/ee.png" width={500} height={500} alt="member of ee" priority quality={100} />
            </div>
        </div>
    </div>
  )
}
