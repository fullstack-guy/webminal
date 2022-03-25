import React from 'react';
import Image from 'next/image';
import CoursesListMenuItem from './CoursesListMenuItem';

// options - icon - windows.svg;
const CoursesList = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-4'>
        <CoursesListMenuItem text={'New'} icon={'options-icon-windows.svg'} />
        <CoursesListMenuItem text='Popular' icon={'options-icon-star.svg'} />
        <CoursesListMenuItem text='Free' icon={'options-icon-heart.svg'} />
        <CoursesListMenuItem text='Pro' icon={'options-icon-pro.svg'} />
      </div>
    </div>
  );
};

export default CoursesList;
