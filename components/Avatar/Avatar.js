/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const Avatar = ({ img, size = 48, withBorder = true }) => {
  const getBorderCss = () => {
    return withBorder ? `rounded-full border-2 border-gray-200 h-[51px]` : '';
  };

  const width = size
  const borderCss = getBorderCss();
  return (
    <div className={`${borderCss}`}>
      <Image
        src={img}
        width={width}
        height={width}
        alt='User avatar'
        className='object-cover rounded-[50px] '
      />
    </div>
  );
};

export default Avatar;
