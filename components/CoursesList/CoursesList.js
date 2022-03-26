import React from 'react';
import Image from 'next/image';
import CoursesListMenuItem from './CoursesListMenuItem';
import CoursesListItem from './CoursesListItem';

// options - icon - windows.svg;
const CoursesList = () => {
  return (
    <>
      <h1 className='pl-8 py-10'>Courses List 😉</h1>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex gap-4 mb-6'>
          <CoursesListMenuItem text={'New'} icon={'options-icon-windows.svg'} />
          <CoursesListMenuItem text='Popular' icon={'options-icon-star.svg'} />
          <CoursesListMenuItem text='Free' icon={'options-icon-heart.svg'} />
          <CoursesListMenuItem text='Pro' icon={'options-icon-pro.svg'} />
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          <CoursesListItem
            header={'JavaScript'}
            paragraph={'Advanced web applications.'}
            length={'- 0 h 55 min'}
          />
          <CoursesListItem
            header={'PowerPoint'}
            paragraph={'Enhance your presentation skills.'}
            length={'- 3 h 15 min'}
          />
          <CoursesListItem
            header={'Data Science'}
            paragraph={'Analyze the data like a pro.'}
            length={'- 3 h 15 min'}
          />
          <CoursesListItem
            header={'Digital Design'}
            paragraph={'Learn the basics of the design.'}
            length={'- 3 h 15 min'}
          />
        </div>
      </div>
    </>
  );
};

export default CoursesList;
