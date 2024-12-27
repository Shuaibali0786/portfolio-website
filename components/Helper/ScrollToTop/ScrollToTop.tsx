"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isvisible, setIsvisible] = useState(false)
    useEffect(()=>{
        const togglevisibility = () =>{
            if(window.scrollY > 300) {
                setIsvisible(true);
            } 
        };
        window.addEventListener('scroll', togglevisibility);
        return() =>{
            window.removeEventListener('scroll', togglevisibility);
        };

    },[])
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };






  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {isvisible && (
            <button onClick={ScrollToTop} className='bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
                <FaArrowUp/>
                </button>
        )}


      
    </div>
  )
}

export default ScrollToTop
