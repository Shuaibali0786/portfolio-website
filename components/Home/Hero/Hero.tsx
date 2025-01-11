
            

   import { BaseInfo } from '@/Data/data';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0715] flex items-center justify-center pt-[4vh] md:pt-[12vh]">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1
            data-aos="fade-left"
            className="text-2xl sm:text-3xl lg:text-4xl mt-4 text-bg text-[26px]  font-semibold"
          >
            Hi,
            <br /> I am <span className="text-bg text-[26px] ">{BaseInfo.name}</span>
          </h1>
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-bg text-[26px] "
          >
            {BaseInfo.position}
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="mt-6 text-sm sm:text-base text-white text-opacity-70"
          >
            {BaseInfo.description}
          </p>

          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex justify-center lg:justify-start text-3xl mt-6 space-x-4"
          >
            <Link href="https://www.linkedin.com/in/shuaib-ali-248a262b5" target="_blank">
              <FaLinkedin className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://github.com/Shuaibali0786" target="_blank">
              <FaGithub className="w-10 h-10 rounded-full bg-gray-800 text-white p-2 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" target="_blank">
              <FaTwitter className="w-10 h-10 rounded-full bg-blue-400 text-white p-2 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" target="_blank">
              <FaInstagram className="w-10 h-10 rounded-full bg-red-600 text-white p-2 hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex justify-center items-center"
        >
          <Image
            src={BaseInfo.profilePic}
            alt={BaseInfo.name}
            width={300}
            height={300}
            className="rounded-full border-4 border-blue-800 lg:w-[400px] xl:w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
