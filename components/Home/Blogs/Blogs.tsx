
import React from 'react';
import { blogs } from '@/Data/data';
import SectionHeading from '@/components/Helper/SectionHanding';
import BlogsCard from './BlogsCard';

const Blogs = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      {/* Section Heading */}
      <SectionHeading>Our Blogs</SectionHeading>

      {/* Blogs Grid */}
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
        {blogs.map((blog, i) => {
          return ( 
          <div 
          data-aos="Zoom-in"
          data-aos-anchor-placement="top-center" 
          data-aos-delay={`${ i * 150}`}
          key={blog.id}>
          <BlogsCard blogs={blog} />
        </div>
      )
    } )}
    </div>
  </div>

   );
          
};

export default Blogs;
