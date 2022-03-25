import React from 'react';
import Image from 'next/image';

const CoursesListMenuItem = ({ text, icon }) => {
  return (
    <div className='border-2 p-3 rounded-full border-secondary flex flex-col justify-center items-center'>
      <Image
        src={`/images/${icon}`}
        className='object-contain'
        width='64px'
        height='64px'
        alt={text}
      />
      <h5 className='py-3'>{text}</h5>
    </div>
  );
};

export default CoursesListMenuItem;
