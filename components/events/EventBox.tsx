import Image from "next/image";

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

    console.log(events)
    return (
        <div className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative"> 
            <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
                <div className="hidden xl:flex w-[400px]">
                    <Image src={'/assets/events/singer.jpg'} alt={'singer'} width={350} height={300} priority quality={100}/>
                </div>
                <div className="flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-white/10 xl:pr-6"> 
                    { 
                        events.map( (event: IEvent) => {
                            return (
                                <div key={event.id} className="flex flex-col justify-between pb-10 my-4 text-center border-b last-of-type:border-none xl:pt-3 xl:pb-3 xl:flex-row border-white/10 item-center gap-y-4 bg-pink-400/10 xl:gap-y-0 xl:text-left xl:my-0"> 
                                    <div  className='flex flex-col xl:flex-row'>
                                        <div className="flex flex-col items-center justify-center leading-tight w-[80px] mb-4 xl:mb-0">
                                            <div className=""> { event.date.day }  </div>
                                            <div className=""> { event.date.month }  </div> 
                                        </div>
                                    </div>  
                                    <div className=""> 
                                        <div>{ `${ event.location.city }, ${event.location.country}` } </div> 
                                        <div>
                                            <div> location icon </div>
                                            <div> { event.location.address }  </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EventBox;