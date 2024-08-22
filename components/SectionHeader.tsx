'use client';
import { motion } from 'framer-motion' 
import { fadeIn } from '../variants'

interface ISectionHeader {
    preTitle: string,
    title: string
}

const SectionHeader = ({ preTitle, title} : ISectionHeader) => {
    return (
        <header>
            <motion.h3 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once:false, amount: 0.3 }}
                className="text-center pretitle"
            > {preTitle} </motion.h3>
            
            <motion.h2 
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once:false, amount: 0.3 }} 
                className="mb-8 text-center h2"> {title} </motion.h2>
        </header>
    )
}

export default SectionHeader