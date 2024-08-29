// 'use client' 
import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox"; 
  

async function fetchData(){ 

    const apiURL = process.env.API_URL
    console.log(' ------------------  ------------------')
    console.log('apiURL: ', apiURL)
    console.log(' ------------------  ------------------') 
    
    const res = await fetch(apiURL + 'events');
    return res.json();
    // setEvents(res.json())
} 

export default async function Events() {  
    
    const events: any  = await fetchData();
  
    return (
        <section className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader preTitle={'World Tour'} title='Upcoming' />
                <EventBox events={ events} />
            </div> 
        </section>
    )
}

 