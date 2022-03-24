import React from 'react';
import Image from 'next/image';

const Input = ({ placeholder = '' }) => {
  return (
    <div className='flex items-center gap-1 border-2   border-gray-100  focus:border-primary-dark rounded-full p-1'>
      <Image
        src='/images/icons/search.svg'
        width='24px'
        height='24px'
        alt='Search Icon'
      />
      <input
        type='text'
        className='outline-none text-xs'
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
