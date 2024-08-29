'use client';
 
 
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';


export default function Header() {

    const [ active, setActive ] =  useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`fixed z-50 w-full ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
            <div className='container flex flex-col items-center justify-between mx-auto xl:flex-row'>
                <Link href="#" className='relative flex w-[226px] h-[38px] mb-4 xl:mb-0'>
                    <div className='text-[36px] font-alexBrush'> Jerry </div>
                </Link>

                <Nav containerStyles='hidden xl:flex items-center gap-x-8'/>

                <NavMobile />

                <div> Menu btn </div>
                <div> Social icons </div>
            </div>
        </header>
    )
}