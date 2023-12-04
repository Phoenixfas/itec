import style from "../../../styles/Learn.module.css"
import Image from "next/image"

export default function AbtRwanda() {
  return (
        <div className={style.rwanda}>

            <div className={style.rwanda__bottom}>
                <div className={style.rwanda__bottom__row}>
                    <div className={style.rwanda__bottom__col}>
                        <h1>Healthcare Industry</h1>
                        <p>In Rwanda, there are 499 health centers and 680 health posts that mainly provide outpatient services such as immunizations and family planning. Additionally, there are numerous dispensaries and 42 district hospitals that offer basic surgical services with at least 15 doctors. Thousands of community health workers operate in the villages. The country has four national referral hospitals, including Kigali University Teaching Hospital, Butare University Teaching Hospital, and the Rwanda Military Hospital. The most advanced hospital is King Faisal Hospital, which operates on a for-profit model but accepts patients referred to it by other hospitals and clinics through the national health insurance system. It has modern equipment such as a CT and MRI machine, two dialysis machines, and a wide range of surgical capabilities. Five cancer treatment centers are available in the country, including the Rwanda Cancer Center at Butaro Hospital and facilities at the four national referral hospitals.</p>
                    </div>
                    <div className={style.rwanda__bottom__col}>
                        <Image src="/images/resource/Kigali-Convention-Centre.jpg" alt="rwanda kigali" width={2000} height={2000} priority quality={100} />
                    </div>
                </div>
            </div>

            <div className={style.rwanda__top}>
                <div className={style.rwanda__top__desc}>
                    <h1>State of Economy</h1>
                    <p>The economy of Rwanda, located in East Africa, has been making impressive progress in recent years. It has established itself as one of the fastest-growing economies on the continent. The government of Rwanda has successfully implemented a range of policies and initiatives aimed at promoting economic growth, reducing poverty, and attracting foreign investment.
                    </p>
                </div>
            </div>


            <div className={style.rwanda__highlights}>
                {/* <h1>State of Economy</h1> */}
                <p>Here are some key indicators of Rwanda&apos;s economic growth:</p>
                <div className={style.rwanda__highlights__list}>
                    <div className={style.rwanda__highlight}>
                        <h3>Gross Domestic Product (GDP):</h3>
                        <p>Rwanda&apos;s GDP has been steadily growing, with an average annual growth rate of around 7-8% in the years leading up to 2023. Agriculture, industry, and services have been major contributors to this growth.</p>
                    </div>
                    <div className={style.rwanda__highlight}>
                        <h3>Agriculture:</h3>
                        <p>Rwanda&apos;s economy depends heavily on agriculture, which employs the majority of the population. The key agricultural products include coffee, tea, bananas, maize, and livestock.</p>
                    </div>
                    <div className={style.rwanda__highlight}>
                        <h3>Industry:</h3>
                        <p>The industrial sector, comprising manufacturing, construction, and mining, is on the rise. Rwanda has been working on developing its manufacturing capacity and attracting foreign investments in various industries.</p>
                    </div>
                    <div className={style.rwanda__highlight}>
                        <h3>Investment:</h3>
                        <p>Rwanda has been actively working to improve its business environment and attract foreign investment. Initiatives such as the Kigali Special Economic Zone have been launched to create an attractive investment climate.</p>
                    </div>
                    <div className={style.rwanda__highlight}>
                        <h3>Infrastructure Development:</h3>
                        <p>To support economic growth and regional integration, Rwanda has been investing in infrastructure development, including roads, energy, and ICT.</p>
                    </div>
                    <div className={style.rwanda__highlight}>
                        <h3>Challenges:</h3>
                        <p>Despite the progress, Rwanda still faces some challenges. For example, there is limited access to electricity in rural areas, and there is a need for increased agricultural productivity. Additionally, income inequality is a pressing issue that needs to be addressed.</p>
                    </div>
                </div>
            </div>

            <div className={style.rwanda__bottom}>
                <div className={style.rwanda__bottom__row}>
                    <div className={style.rwanda__bottom__col}>
                        <h1>Ease of Doing Business in Rwanda</h1>
                        <p>Rwanda, a landlocked East African nation, has become a shining example of economic progress and business-friendly policies on the African continent. Over the past decade, the country has consistently climbed the ranks in the World Bank&apos;s Ease of Doing Business index, reflecting its commitment to creating a conducive environment for both local and foreign investors. In the latest report for the year 2023, Rwanda&apos;s exceptional performance stands out, earning the 38th position among 190 economies worldwide and the title of the second-best performer in Africa. </p>
                        <p>Rwanda&apos;s journey to becoming a favorable destination for business started several years ago. The government embarked on an ambitious reform program aimed at simplifying bureaucratic processes, reducing red tape, and streamlining regulatory frameworks. This commitment to reform began to yield positive results, laying the foundation for Rwanda&apos;s impressive rise in the Ease of Doing Business rankings</p>
                    </div>
                    <div className={style.rwanda__bottom__col}>
                        <Image src="/images/resource/rwanda_flag.jpg" alt="rwanda kigali" width={2000} height={2000} priority quality={100} />
                    </div>
                </div>
            </div>
        </div>
  )
}