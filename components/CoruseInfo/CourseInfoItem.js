import React, { useState } from 'react';
import Image from 'next/image';
import ProgressBar from '../ProgressBar/ProgressBar';
import { getDurationAsMinute } from '../../utils/helpers';

const CourseInfoItem = ({ color, width, icon, duration, name, description }) => {
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
      <div className='flex flex-col justify-center gap-2 flex-1'>
        <p className='paragraph-4'>{getDurationAsMinute(duration)}</p>
        <h3>{name}</h3>
        <p className='paragraph-4 max-w-[200px] mb-6'>
          {description}
        </p>

        <ProgressBar width={width} color={color} />
      </div>
    </div>
  );
};

export default CourseInfoItem;
