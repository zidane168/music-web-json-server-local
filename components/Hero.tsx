'use client'

import Image from 'next/image'
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'        // 'use client'

const locationSequence = [
    'Shang Hai, China',
    3000,
    'Rio de Janeiro, Brazil',
    3000,
    'Paris, France',
    3000,
    'Tokyo, Japan',
    3000,
    'New York City, USA',
    3000,
]

const Hero = () => {
    return (
        <section className='h-[80vh] xl:h-[850px]' id='home'> 
            <div className='container relative flex items-center h-full mx-auto '> 
                <div className='z-0 flex flex-col justify-center h-full pt-12'> 
                    <MouseParallaxContainer globalFactorX={ 0.1 } globalFactorY={ 0.2 } resetOnLeave className='relative flex items-center h-[120px] xl:h-max xl:w-[840px]' > 

                        <MouseParallaxChild factorX={ 0.2 } factorY={ 0.4 } className='relative opacity-80'>
                            <motion.div 
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='w-[300px] h-[102px] xl:w-[725px] xl:h-[245px]'>
                                <Image 
                                    src={'/assets/albums/hero/mia.png'}
                                    fill
                                    alt=''
                                    className=''
                                />
                            </motion.div>
                        </MouseParallaxChild>
                        
                        <MouseParallaxChild factorX={ 0.3 } factorY={ 0.6 } className='absolute z-30 right-[100px]'>
                            <motion.div 
                            
                                variants={fadeIn('up', 0.7)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='w-[160px] h-[102px] xl:w-[825px] xl:h-[245px] relative left-[30px]'>
                                <Image 
                                    src={'/assets/albums/hero/jerry.png'}
                                    fill
                                    alt=''
                                    className='object-contain '
                                />
                            </motion.div>
                        </MouseParallaxChild>


                        <MouseParallaxChild factorX={ 0.4 } factorY={ 0.7 } className='absolute right-0 z-30 opacity-80'>
                            <motion.div 
                            
                                variants={fadeIn('left', 0.6)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className='w-[100px] h-[122px] xl:w-[225px] xl:h-[205px] relative -left-[40px]'>
                                <Image 
                                    src={'/assets/albums/hero/bird.png'}
                                    fill
                                    alt=''
                                    className='object-contain'
                                />
                            </motion.div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer> 

                    <motion.div 
                        variants={ fadeIn('up', 0.4) }
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex justify-start text-xl text-left">  
                       
                        <div className="relative items-center justify-center hidden mx-4 xl:flex w-7 h-7">
                            <Image className='text-white' fill src={'assets/icons/mic.svg'} alt="mic" />
                        </div>
                        <TypeAnimation sequence={ locationSequence } wrapper='div' speed={ 10 } deletionSpeed={ 10 } repeat={ Infinity } cursor={ false } />

                    </motion.div>

                    <motion.div
                        variants={ fadeIn('up', 0.4) }
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='mt-4'
                    >
                        <button className='font-semibold btn btn-lg btn-accent font-montserrat'> Get Tickets </button>
                    </motion.div>
                </div>
 
                <MouseParallaxChild factorX={ 0.4 } factorY={ 0.7 } 
                    className='absolute top-0 right-0 z-0 hidden xl:flex'>
                    <motion.div  
                        variants={fadeIn('left', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='w-[734px] h-[893px] absolute -right-[190px]'>
                        <Image 
                            src={'/assets/albums/hero/singer.png'}
                            fill
                            alt=''
                            className='object-contain'
                        />
                    </motion.div>
                </MouseParallaxChild> 
            </div>
        </section>
    )
}

export default Hero;