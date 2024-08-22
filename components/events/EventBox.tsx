'use client';
import Image from "next/image";

// icons
import { RiMapPin2Fill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

// "id": 1,
//             "date" : {
//                 "day": "15",
//                 "month": "Sep"
//             },
//             "location": {
//                 "city": "ShangHai",
//                 "country": "China",
//                 "address": "Tian round road"
//             },
//             "priceRange": "10-29$" 

interface IDate {
    day: string
    month: string
}     

interface ILocation {
    city: string
    country: string
    address: string
}    

interface IEvent {
    id: string,
    date: IDate,
    location: ILocation,
    priceRange: string
}

const EventBox = ({events} : {events: IEvent[]} ) => { 
    
    return (
        <motion.div
            variants={ fadeIn('up', 0.2) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative"> 
            <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
                <div className="hidden xl:flex w-[400px]">
                    <Image src={'/assets/events/singer.jpg'} alt={'singer'} width={350} height={300} priority quality={100}/>
                </div>
                <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-white/10 xl:pr-6"> 
                    { 
                        events.map( (event: IEvent) => {
                            return (
                                <div key={event.id} className="flex flex-col items-center justify-between p-4 pb-10 my-4 text-center border-b last-of-type:border-none xl:pt-3 xl:pb-3 xl:flex-row border-white/10 gap-y-4 bg-pink-400/10 xl:gap-y-0 xl:text-left xl:my-0"> 
                                    <div  className='flex flex-col xl:flex-row'>
                                        <div className="flex flex-col items-center justify-center leading-tight w-[80px] mb-4 xl:mb-0 xl:bg-red-400/20 p-2">
                                            <div className="text-[44px] font-black text-primary"> { event.date.day }  </div>
                                            <div className="text-[20px] font-extrabold"> { event.date.month }  </div> 
                                        </div>
                                    </div>  
                                    <div className="flex flex-col w-64 p-6 bg-red-500/30 gap-y-2"> 
                                        <div className="text-lg font-bold leading-none">{ `${ event.location.city }, ${event.location.country}` } </div> 
                                        <div className="flex items-center justify-center gap-x-1">
                                            <div className="text-lg text-white"> 
                                                <RiMapPin2Fill />
                                            </div>
                                            <div className="font-light"> { event.location.address }  </div>
                                        </div>
                                    </div>

                                    { /* price range */ }
                                    <div className="w-[100px] text-[17px] text-center text-white  font-bold"> { event.priceRange } </div>
                                    <button className="btn-accent btn btn-sm"> Get tickets</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default EventBox;