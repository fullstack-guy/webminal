import React from 'react';
import Image from 'next/image';

const CoursesListItem = ({ header, paragraph, length }) => {
  return (
    <div className='mb-10'>
      <div>
        <Image
          src='/images/course-temp-1.svg'
          className='object-contain'
          width='220px'
          height='134px'
          alt={'temp'}
        />
      </div>
      <div className='border-2 border-gray-100 rounded-br-2xl  100 rounded-bl-2xl  -mt-2 border-t-0'>
        <div className='flex flex-col justify-center gap-2 pt-5 px-2'>
          <p className='paragraph-4'>{length}</p>
          <h3>{header}</h3>
          <p className='paragraph-4 max-w-[200px] mb-6'>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesListItem;
