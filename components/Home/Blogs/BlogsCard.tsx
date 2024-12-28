// import React from 'react'

import React from 'react';
import Image from 'next/image';



// Define props type
type Props = {
  blogs: {
    id: number;
    title: string;
    summary: string;
    date: string;
    image: string;
  };
};

const BlogsCard = ({ blogs }: Props) => {
  const { title, summary, date, image } = blogs;

  return (
    <div className="rounded-md overflow-hidden bg-[#1a0e25] shadow-lg text-white">
      {/* Blog Image */}
      <Image src={image} alt={title} width={400} height={250} className="w-full object-cover" />
      

      {/* Blog Content */}
      <div className="p-6">
        <h1 className='rounded-sm px-6 py-1.5 bg-blue-800  text-white w-fit'>News</h1>
        <h3 className="text-lg font-bold mt-4 mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{summary}</p>
        <p className="text-xs text-gray-500">{date}</p>
     
      </div>
    </div>
  );
};

export default BlogsCard;
