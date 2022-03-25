import React from 'react';

const CircleProgressbar = () => {
  return (
    <svg className='progress-ring' width='220' height='220'>
      <circle
        className='progress-ring__circle'
        stroke='#FC77A0'
        strokeWidth='4'
        fill='transparent'
        r='72'
        cx='90'
        cy='90'
      />
    </svg>
  );
};

export default CircleProgressbar;
