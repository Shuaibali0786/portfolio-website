"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Home = () => {
  useEffect(() => {
    const initAos = async () => {
    await import ("aos");
    AOS.init({
      duration:1000,
      easing:"ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
     };
     initAos();
  }, []);
  
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Reviews/>
      <Blogs/>
      <Contact/>
    
    </div>
  )
}

export default Home
