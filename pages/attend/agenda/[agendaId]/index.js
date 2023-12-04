import Head from "next/head"
import style from "../../../../styles/Attend.module.css"
import Hero from "./Hero"
import conferenceAgenda from "../../../../data/conferenceAgenda"
import AgendaView from "./AgendaView"

export default function index({activity, day}) {
  return (
    <div className={style.main}>
        <Head>
            <title>{`ITEC || ${activity.name}`}</title>
            <meta name="description" content={activity.description} />
        </Head>
        <Hero title={activity.name} image={activity.image} />
        <AgendaView activity={activity} day={day} />
    </div>
  )
}


export async function getServerSideProps(context) {
    const { agendaId } = context.query;
    // Find the activity in the conferenceAgenda that matches the order number
    const day = conferenceAgenda.find((day) => day.activities.find((act) => act.order === agendaId));
    const activity = day?.activities.find((act) => act.order === agendaId);

    if (!activity) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            activity,
            day,
        },
    };
};