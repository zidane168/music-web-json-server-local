'use client'
import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import EventBox, { IEvent } from "./EventBox"; 
  
export default function Events() {

    const [ events, setEvents ] = useState<IEvent[]>([]); 
    async function getEvents(): Promise<IEvent[]> { 
        const apiURL = process.env.API_URL

        console.log('apiURL: ', apiURL)
        const res = await fetch(apiURL + 'events');
        // console.log(res)
        return res.json();
        
    } 

    useEffect(() => { 
        getEvents().then(events => {
            console.log(events)
            setEvents(events)
        })
    }, [])

  
    return (
        <section className="section" id="tours">
            <div className="container mx-auto">
                <SectionHeader preTitle={'World Tour'} title='Upcoming' />
                <EventBox events={ events} />
            </div> 
        </section>
    )
}

 