import React from 'react';
import Image from 'next/image';

const CoursesListMenuItem = ({ text, icon }) => {
  return (
    <div
      className='border-2 p-3 rounded-full border-secondary
    flex flex-col justify-center items-center cursor-pointer'
    >
      {icon}

      <h5 className='py-3 '>{text}</h5>
    </div>
  );
};

export default CoursesListMenuItem;
