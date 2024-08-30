import EventBox from "@/components/events/EventBox";
import SectionHeader from "@/components/SectionHeader"; 
import type { GetServerSideProps } from "next";

export default async function Events() {  
    const apiURL = process.env.API_URL;
    const response =  await fetch(`${apiURL}events`);
    const events =   await response.json();
      
    return ( 
        <section className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader preTitle={'World Tour'} title='Upcoming' />
                <EventBox events={events} />
            </div> 
        </section> 
    );
};


// export const getServerSideProps: GetServerSideProps = async () => {
//     console.log('calling server side rendering');
    
//     const apiURL = process.env.API_URL;
//     const response = await fetch(`${apiURL}events`);
//     const events = await response.json();

//     return {
//         props: { events },
//     };
// };
 