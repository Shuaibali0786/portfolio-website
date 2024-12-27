import React from 'react'
import Image from 'next/image';

type Props ={
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
     };
};



const ReviewCard = ({review}:Props) => {
  const {image, name, profession, rating, review: clientReviews} = review;
return (
  <div className='rounded-md overflow-hidden bg-[#140c1c] mt-4 gap-4 text-white shadow-lg p-6'>

      <div className='flex justify-center mb-4 '>
          <Image 
          src={image}
           alt={name}
            width={80}
           height={80} className='rounded-full border-2 border-gray-500'/>
      </div>
      <div className='text-center '>
          <h3 className='text-lg font-bold'>{name}</h3>
          <p className=' text-sm text-gray-400'>{profession}</p>

      </div>
     <p className='mt-4 text-sm italic text-gray-300 text-center'>{clientReviews}</p>     

     <div className='flex justify-center mt-4'>{[...Array(5)].map((index) =>(
         <span
         key={index}
         className={
           index < rating ? 'text-yellow-400' : 'text-gray-600'
         }
       >
         ★
       </span>

     
     ))}
     </div>
  </div>

  )
}

export default ReviewCard
