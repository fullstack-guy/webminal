/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const getWidthStr = (size) => {
  return `${size}px`;
};

const Avatar = ({ img, size = 48, withBorder = true }) => {
  const getBorderCss = () => {
    return withBorder
      ? `rounded-full border-2 border-gray-200 h-[${size + 3}px]`
      : '';
  };

  const width = getWidthStr(size);
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
