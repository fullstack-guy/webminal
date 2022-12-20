import React from 'react';
// import Image from 'next/image';

import CoursesListItem from './CoursesListItem';
import CoursesFiltersMenu from '../CoursesFiltersMenu/CoursesFiltersMenu';

// options - icon - windows.svg;
const CoursesList = ({ session }) => {
  return (
    <>
      <h1 className='pl-8 py-10'>Courses List 😉</h1>
      <div className='flex flex-col justify-center items-center'>
        <CoursesFiltersMenu />
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
          />{' '}
          \
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
