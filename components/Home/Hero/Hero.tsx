import { BaseInfo } from '@/Data/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";
const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] '>
      <div className='flex justify-center flex-colw w-4/5 h-full mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

        {/* Text Content */}
        <div>
            <h1 data-aos="fade-left"
             className=' text-2xl md:text-3xl lg:text-4xl mb-5 mt-4 text-gray-300 font-semibold'> <span className='text-[]'>Hi,</span> <br />I am {BaseInfo.name}</h1>
            {/* title */}
            <h1 data-aos="fade-right"data-aos-delay="100"
              className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl-leading-[4rem text-white'>{BaseInfo.position}
            </h1>
                {/* description */}
                <p data-aos="fade-left" data-aos-delay="200" className='mt-6 text-sm md:text-base text-white text-opacity-60'>{BaseInfo.description}</p>

                {/* Button */}
                <button data-aos="Zoom-in" data-aos-delay="300" className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8  flex items-center space-x-2'>
                                 {/* Social Icons */}
        <div data-aos="zoom-in"
            data-aos-delay="400" className="home-sci flex text-7xl pb-8 space-x-4">
          <Link href="https://www.linkedin.com/in/shuaib-ali-248a262b5" target="_blank">
            <FaLinkedin className="w-6 h-6 rounded-full text-5xl bg-blue-800 text-white p-1" />
          </Link>
          <Link href="https://github.com/Shuaibali0786" target="_blank">
            <FaGithub className="w-6 h-6 rounded-full bg-blue-600 text-white p-1" />
          </Link>
          <Link href="#" target="_blank">
            <FaTwitter className="w-6 h-6 rounded-full bg-blue-400 text-white p-1" />
          </Link>
          <Link href="#" target="_blank">
            <FaInstagram className="w-6 h-6 rounded-full bg-red-600 text-white p-1" />
          </Link>
          
        </div>
                  
                  
                </button>
            
        </div>
        {/* Image content */}
        <div  data-aos="zoom-in"
            data-aos-delay="400" className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
            <Image 
            src={BaseInfo.profilePic}
            alt={BaseInfo.name}
            width={300}
            height={300}
            />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
