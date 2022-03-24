/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const Avatar = ({ img }) => {
  return (
    <div className=' rounded-full border-2 border-gray-200 h-[51px]'>
      <Image
        src={img}
        width='48px'
        height='48px'
        alt='User avatar'
        className='object-cover rounded-[50px] '
      />
    </div>
  );
};

export default Avatar;
