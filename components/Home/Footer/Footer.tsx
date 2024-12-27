import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div  className='pt-16 pb-16 bg-[#0f0715]'>
        <div  >
            <Image
            src="/image/logos1.jpg"
            alt='logo'
            width={100}
            height={100}
            className='mx-auto'/>
        </div>

        <div data-aos="zoom-in"
    data-aos-delay="400"  className='flex items-center flex-wrap justify-center space-x-10 scroll-py-4 text-white font-bold'>
            <div>Home</div>
            <div>Services</div>
            <div>Projects</div>
            <div>Reviews</div>
           <div>Contact</div>
        </div>
        <div  className='text-white text-opacity-60 mt-6 text-center'>2024 All Rights Reserved by WebDev Warriors</div>
      
    </div>
  )
}

export default Footer
