import React from 'react';

const RoundedCorners = () => {
  return (
    <svg
      width={64}
      height={64}
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width={64} height={64} rx='20' fill='#52C3FF' />
      <circle
        cx='32'
        cy='26'
        r='6'
        stroke='white'
        strokeWidth='1.71429'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23 39.9965C22.9985 39.5514 23.0878 39.1117 23.261 38.7108C23.8048 37.4979 25.3383 36.8551 26.6108 36.564C27.5285 36.3456 28.4589 36.1997 29.3951 36.1273C31.1282 35.9576 32.8714 35.9576 34.6046 36.1273C35.5407 36.2005 36.471 36.3464 37.3889 36.564C38.6613 36.8551 40.1948 37.4373 40.7386 38.7108C41.0871 39.5281 41.0871 40.477 40.7386 41.2943C40.1948 42.5678 38.6613 43.15 37.3889 43.4289C36.4722 43.6564 35.5415 43.8064 34.6046 43.8777C33.1939 44.0111 31.7767 44.0354 30.363 43.9505C30.0367 43.9505 29.7213 43.9505 29.3951 43.8777C28.4617 43.8073 27.5345 43.6573 26.6217 43.4289C25.3383 43.15 23.8157 42.5678 23.261 41.2943C23.0886 40.8887 22.9995 40.4453 23 39.9965Z'
        stroke='white'
        strokeWidth='1.71429'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default RoundedCorners;
