import React from 'react'
import SectionHanding from '@/components/Helper/SectionHanding'
import { aboutInfo } from '@/Data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return ( 
    <div className=' pt-32 pb-16  bg-[#050709]'>
    
     <SectionHanding>About Me</SectionHanding> 
     <div  
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      className='w-[80%] mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'> 
      <div   data-aos="fade-left"
      data-aos-anchor-placement="top-center">
        <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'> {aboutInfo.title}
         </h1> 
         <p className='mt-6 text-base text-gray-500'>
          {aboutInfo.description}
         </p>
         <div className='mt-8 '>
          <div className='flex items-center space-x-2 mb-6'>
            <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
            <FaCheck className='text-white' />
            </div>
            <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontend Developement</p>
          </div>

          <div className='flex items-center space-x-2 mb-6'>
            <div className='w-7 h-7 bg-red-800 flex flex-col items-center justify-center'>
            <FaCheck className='text-white' />
            </div>
            <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Backend Developement</p>
          </div>

          <div className='flex items-center space-x-2 mb-6'>
            <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
            <FaCheck className='text-white' />
            </div>
            <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Full Stack Developement</p>
          </div>
         </div>
      </div>
     
      <div
        data-aos="Zoom-in"
        data-aos-anchor-placement="top-center" 
        data-aos-delay="150"
      className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
    
        <div>
          <Image src="/image/customer.jpg" alt='image'
          width={80}
          height={80}
          className='mx-auto'/>
          <p className='mt-3 font-bold text-xl text-white text-center'>
            {aboutInfo.client}
          </p>
          <p className='text-base sm:text-lg text-gray-400 text-center'>
            Satisfied Customers
          </p>
        </div>
        {/* 2nd starts */}
        <div>
          <Image src="/image/ss2.jpg" alt='image'
          width={80}
          height={80}
          className='mx-auto'/>
          <p className='mt-3 font-bold text-xl text-white text-center'>
            {aboutInfo.experience}
          </p>
          <p className='text-base sm:text-lg text-gray-400 text-center'>
            Years Experience
          </p>
        </div>
        {/* 3rd start */}
        <div>
          <Image src="/image/project-pic.jpg" alt='image'
          width={80}
          height={80}
          className='mx-auto'/>
          <p className='mt-3 font-bold text-xl text-white text-center'>
            {aboutInfo.projects}
          </p>
          <p className='text-base sm:text-lg text-gray-400 text-center'>
            Completed Projects
          </p>
        </div>
        {/* 4th start */}
        <div>
          <Image src="/image/sky.jpg" alt='image'
          width={80}
          height={80}
          className='mx-auto'/>
          <p className='mt-3 font-bold text-xl text-white text-center'>
            {aboutInfo.website}
          </p>
          <p className='text-base sm:text-lg text-gray-400 text-center'>
            Websites Launched
          </p>
        </div>

      </div>
     </div>
     </div>
     


     
    
  )
}

export default About
