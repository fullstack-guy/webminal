import React from 'react';
import Image from 'next/image';

const Notifications = ({ size, header, text, icon }) => {
  return (
    <div className='flex items-center default-border gap-2 min-w-[250px] rounded-3xl m-2'>
      <div className=' pr-3'>
        <Image
          src={`/images/${icon}`}
          width={size}
          height={size}
          className='object-contain'
          alt='signing with google button'
        />
      </div>
      <div className='flex flex-col justify-center gap-2'>
        <h3>{header}</h3>
        <p className='paragraph-4 max-w-[200px] mb-6'>{text}</p>
      </div>
    </div>
  );
};

export default Notifications;
