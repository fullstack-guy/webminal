import React from 'react';
import CoursesFiltersMenu from '../CoursesFiltersMenu/CoursesFiltersMenu';
import CoursesListItem from '../CoursesList/CoursesListItem';
import CoursesListMenuItem from '../CoursesList/CoursesListMenuItem';

const MyCoursesList = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <CoursesFiltersMenu />
      <div className='flex flex-wrap gap-4 justify-center'>
        <CoursesListItem
          header={'SwiftUI'}
          paragraph={'Fast prototyping for designers.'}
          length={'- 0 h 55 min'}
        />
        <CoursesListItem
          header={'Github'}
          paragraph={'All that you need to know about it.'}
          length={'- 2 h 35 min'}
        />
        <CoursesListItem
          header={'Research'}
          paragraph={'Learn how to research like a pro.'}
          length={'- 1 h 54 min'}
        />
        <CoursesListItem
          header={'Web Design'}
          paragraph={'Design your first website today.'}
          length={'- 0 h 33 min'}
        />
      </div>
    </div>
  );
};

export default MyCoursesList;
