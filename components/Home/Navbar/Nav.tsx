"use client"
import React, { useEffect, useState } from 'react'

import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

// define props type

type Props = {
  openNav: () => void;
};


const Nav = ({ openNav}: Props) => {
  const [navBg,setNavBg] = useState(false)
  useEffect(() => {
    const handler = () =>{
      if(window.scrollY >= 90){
        setNavBg(true);
      }
      if (window.scrollY < 90 ) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll",handler)
    return ()=> {
      window.removeEventListener("scroll", handler)
    }
  }, []);
  return (
    <div className={`fixed ${navBg ? 'bg-[#240b39]' :'fixed'} h-[12vh] z-[10] w-full  transition-all duration-200` }>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%]
      mx-auto'>
      

        {/* Logo */}
        <h1 className='text-4xl text-bg text-[26px] '>Webdev</h1>

        {/* <Image src="/image/logos1.jpg" 
      alt='LOGO'
      width={100}
      height={100}
      className='ml-[-1.5rem] sm:ml-0 pt-4 pb-1'/> */}

      {/* Nav Link */}
      <div   className='flex items-center space-x-10 '>
       <div className='hidden lg:flex items-center space-x-8'>
       {navLinks.map((navLinks) => {
        return <Link key={navLinks.id} href={navLinks.url}>
          <p className='nav_link'> {navLinks.lable}</p>
        </Link>
      })} 
       </div>
       {/* Button */}
       <div className='flex items-center space-x-4'>
        <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800  font-semibold sm:text-base text-sm bg-white hover:bg-gray-400 transition-all duration-200 rounded-lg'>Here Me</button>
        {/* Burger */}
        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
       </div>
      
       
      </div>

      </div>
      
    </div>
  )
}

export default Nav



