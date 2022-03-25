import React from 'react';
import CourseInfoItem from './CourseInfoItem';
// import Image from 'next/image';

const CurseInfo = () => {
  return (
    <section className='min-w-[250px]'>
      <div className='flex flex-col justify-center gap-6'>
        <CourseInfoItem
          color='bg-secondary'
          width={70}
          icon={'icon-tag-search.svg'}
        />
        <CourseInfoItem
          color='bg-tertiary'
          width={61}
          icon={'icon-tag-docs.svg'}
        />
        <CourseInfoItem
          color='bg-accent-1'
          width={93}
          icon={'icon-tag-settings.svg'}
        />
        <CourseInfoItem
          color='bg-secondary'
          width={33}
          icon={'icon-tag-star.svg'}
        />
      </div>
    </section>
  );
};

export default CurseInfo;
