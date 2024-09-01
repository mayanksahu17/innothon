'use client'
import React from 'react'
import { StarIcon } from "@heroicons/react/20/solid";
interface starProps {
  ratings: number;
}

const StarCount: React.FC<starProps> = ({ ratings }) => {
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <div className='flex flex-row'>
          <StarIcon
            key={i}
            className={`-mr-0.5 h-6 w-7 flex ${i < ratings ? "text-yellow-500" : "text-gray-300"
              }`}
            aria-hidden="true"
          />
        </div>
      );
    }
    return stars;
  };

  return (
    <>
      <div className='flex'>
        {renderStars()}
      </div>
    </>
  );
}
export default StarCount;
