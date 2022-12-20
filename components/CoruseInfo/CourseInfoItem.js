import React, { useState } from 'react';
import Image from 'next/image';
import ProgressBar from '../ProgressBar/ProgressBar';

const CourseInfoItem = ({ color, width, icon }) => {
  return (
    <div className='flex default-border gap-2 min-w-[250px] rounded-3xl'>
      <div className='pr-3'>
        <Image
          src={`/images/${icon}`}
          width={64}
          height={64}
          className='object-contain'
          alt='signing with google button'
        />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <p className='paragraph-4'>- 0 h 55 min</p>
        <h3>Introduction & Basics</h3>
        <p className='paragraph-4 max-w-[200px] mb-6'>
          Learn all the basics that you need to know to get started.
        </p>

        <ProgressBar width={width} color={color} />
      </div>
    </div>
  );
};

export default CourseInfoItem;
