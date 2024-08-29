# ------------------------------------------------------------------------ 
This project library
yarn add json-server

yarn add swr swiper tailwind-scrollbar react-icons react-parallax-mouse react-responsive react-type-animation 
react-scroll react-audio-play framer-motion


# ------------------------------------------------------------------------ 
# npm i json-server -g
= yarn global add json-server


# ------------------------------------------------------------------------ 
# setup json-server for can build up a BE simple
json-server --watch --port 4001 ./_data/db.json

http://localhost:4001/events
http://localhost:4001/albums
http://localhost:4001/posts

# create nest project
nest new abc;

# ------------------------------------------------------------------------  
# env file
ON Nestjs
yarn add @nestjs/config dotenv

src/.env
PORT=3010

AppModule.ts 
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})

-----> how to use
oh man if call on server side it must be below
const port = process.env.PORT || 3001
await app.listen(port);

ON Nextjs, create env.local
API_URL='http://localhost:4001/'
when use; 

if call on client side should create (NEXT_PUBLIC_API_URL) and 'use client'; 
NEXT_PUBLIC_API_URL='http://localhost:4001/'


# import { RiMapPin2Fill } from 'react-icons/ri'
for icons use


# using motion

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

src/variants.js

 <motion.div
            variants={ fadeIn('up', 0.2) }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>

</motion.div>


# chu animation runing
import { TypeAnimation } from 'react-type-animation';
 <div> 
    <TypeAnimation sequence={ locationSequence } wrapper='div' speed={ 10 } deletionSpeed={ 10 } repeat={ Infinity } cursor={ false } />
</div>


# --------------
get class active when click inside links (có thể truyền biến active khi bấm vào links)
import { Link } from "react-scroll"

links.map((link, index) => {
              return ( <Link 
                  to={`${link.path}`}
                  key={ index }  
                  className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}   
                  smooth
                  spy
                  offset={-50}
                  activeClass='active'
              > 
                  { link.name } 
                  </Link>)


# dung server side rendering
 
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

 