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
const port = process.env.PORT || 3001
await app.listen(port);

ON Nextjs, create env.local
API_URL='http://localhost:4001/'
when use; 


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



