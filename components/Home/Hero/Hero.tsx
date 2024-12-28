
            import { BaseInfo } from '@/Data/data';
            import React from 'react';
            import Image from 'next/image';
            import Link from 'next/link';
            import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
            
            const Hero = () => {
              return (
                <div className="w-full h-screen bg-[#0f0715] flex items-center justify-center pt-[4vh] md:pt-[12vh]">
                  <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                      <h1
                        data-aos="fade-left"
                        className="text-2xl md:text-3xl lg:text-4xl mb-5 mt-4 text-gray-300 font-semibold"
                      >
                        <span >Hi,</span>
                        <br />I am {BaseInfo.name}
                      </h1>
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="100"
                        className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl-leading-[4rem text-white"
                      >
                        {BaseInfo.position}
                      </h1>
                      <p data-aos="fade-left" data-aos-delay="200" className='mt-6 text-sm md:text-base text-white text-opacity-60'>{BaseInfo.description}</p> 
                     \
            
               
                      <div
                       data-aos="fade-right"
                        data-aos-delay="100"
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
            
                 
                    <div
                      data-aos="zoom-in"
                      data-aos-delay="400"
                      className="hidden lg:flex justify-center items-center"
                    >
                      <Image
                        src={BaseInfo.profilePic}
                        alt={BaseInfo.name}
                        width={300}
                        height={300}
                        className="rounded-full border-4 h-auto max-w-full lg:w-[600px border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              );
            };
            
            export default Hero;
            