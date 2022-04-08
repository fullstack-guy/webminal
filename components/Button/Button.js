import React, { useState } from 'react';
import Image from 'next/image';

import GoForward from '../../Images/icons/GoForward.js';
import { calcLength } from 'framer-motion';
const Button = ({ text, alt = '', onClick = () => {}, css = '' }) => {
  const [onHover, setOnHover] = useState('#000');
  return (
    <div
      className={`button ${css}`}
      onClick={onClick}
      onMouseEnter={() => {
        console.log('here');
        setOnHover('#fff');
      }}
      onMouseLeave={() => {
        setOnHover('#000');
      }}
    >
      <h3 className='hover:text-white  p-2'>{text}</h3>
      <div className='absolute  right-1.5 top-3 mt-[2px] '>
        <GoForward stroke={onHover} />
      </div>
    </div>
  );
};

export default Button;
