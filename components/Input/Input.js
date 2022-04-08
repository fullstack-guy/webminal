import React from 'react';
import Image from 'next/image';

const Input = ({ placeholder = '' }) => {
  return (
    <div className='focus-within:border-secondary  animate-500 flex items-center gap-1 border-2   border-gray-100  focus:border-primary-dark rounded-full p-1'>
      <Image
        src='/images/icons/Search.svg'
        width='24px'
        height='24px'
        alt='Search Icon'
      />
      <input
        type='text'
        className='custom-input outline-none text-xs w-[130px]  focus:w-[250px] '
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
