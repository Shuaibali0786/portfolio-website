import React from 'react'

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
    <div className='rounded-md overflow-hidden bg-[#040c1c] mt-4'>
        ReviewCard
      
    </div>
  )
}

export default ReviewCard
