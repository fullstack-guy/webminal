import React from 'react';
import Image from 'next/image';
import { calcLength } from 'framer-motion';

const Button = ({ text, alt = '', onClick = () => {} }) => {
  return (
    <div className='button' onClick={onClick}>
      <h3 className='hover:text-white  p-2'>{text}</h3>
      <div className='absolute  right-1.5 top-3 mt-[2px] '>
        <Image
          src='/images/icons/Go-forward.svg'
          width='16px'
          height='16px'
          alt='signing with google button'
        />
      </div>
    </div>
  );
};

export default Button;
