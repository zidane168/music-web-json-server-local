import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";

const getEvents = async() => {
    const apiURL = process.env.API_URL
    const res = await fetch(apiURL + 'events');
    console.log(res)
    return res.json();
}

const Events = async () => {
    const events = await getEvents(); 
    return (
        <section className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader preTitle={'World Tour'} title='Upcoming' />
                <EventBox events={ events} />
            </div> 
        </section>
    )
}


export default Events;