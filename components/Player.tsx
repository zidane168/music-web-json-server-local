'use client';

import Image from 'next/image'
import { AudioPlayer } from 'react-audio-play';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

export default function Player() {
    return ( 
        <div className="mt-12 p-4 bg-gradient-to-r from-white/50 to-primary/30 backdrop-blur-[20px]">
            <div className='container flex items-center justify-between mx-auto'>
                <div className='w-[300px]  hidden xl:flex gap-4 items-center'>
                    <div className='items-center gap-x-4'> 
                        <Image src={'/assets/avatars/1.png'} className="rounded-full"  width={'80'} height={'80'} alt="avatar" />
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <div> Mia </div>
                        <div> yi-ge-ren.mp3 </div>
                    </div>
                    
                </div>
                <div className="w-full"> 
                    <AudioPlayer 
                        loop 
                        preload='none'
                        color='#333'
                        volume={40}
                        volumePlacement='top'
                        src='/assets/songs/yi-ge-ren.mp3'
                        style={{
                            background: 'transparent',
                            boxShadow: 'none',
                            width: '100%',
                        }}
                        />
                </div>
            </div>
        </div>  
    );
}