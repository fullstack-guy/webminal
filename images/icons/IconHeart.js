import React, { useEffect } from 'react';

const IconHeart = ({ fill, stroke = '#fff' }) => {
  return (
    <svg
      width={60}
      height={60}
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='30' cy='30' r='29.5' stroke={stroke} fill={fill} />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M37.1768 18.3983C39.2753 19.0588 41.0202 20.576 42.006 22.5971C43.1586 25.0468 43.3155 27.8695 42.4418 30.4389C41.6377 32.8043 40.3194 34.9486 38.5877 36.7076C37.4523 37.8888 36.2288 38.9763 34.9286 39.9602L34.8597 40.0194C34.4278 40.3137 33.8468 40.1981 33.5521 39.7592C33.4022 39.5472 33.3421 39.2816 33.3853 39.0231C33.4285 38.7646 33.5715 38.5352 33.7815 38.3872C35.0016 37.4567 36.1519 36.4326 37.2227 35.3238C38.7648 33.7878 39.9424 31.9057 40.6639 29.8239C41.3579 27.7494 41.2174 25.4748 40.2739 23.5079C39.5146 21.9605 38.1768 20.7989 36.5689 20.2907C34.5179 19.6294 32.2835 20.0303 30.5697 21.3671C30.229 21.6273 29.7634 21.6273 29.4226 21.3671C27.7096 20.0285 25.4743 19.6274 23.4235 20.2907C21.8047 20.7877 20.4536 21.9458 19.6841 23.496C18.7618 25.4615 18.6299 27.7231 19.317 29.7884C20.0416 31.8652 21.2189 33.7428 22.7582 35.2765C25.0327 37.5253 27.5408 39.5086 30.2371 41.1903C30.58 41.4356 30.7308 41.8806 30.6106 42.2927C30.4905 42.7049 30.1267 42.9904 29.7094 43C29.5213 43.0011 29.3373 42.9434 29.1818 42.8344C26.3731 41.0828 23.761 39.0162 21.3932 36.6721C19.6519 34.9189 18.3287 32.7731 17.5276 30.4034C16.6841 27.8376 16.8573 25.0321 18.0093 22.5971C18.9951 20.576 20.74 19.0588 22.8385 18.3983C25.2512 17.6299 27.8689 17.984 30.0077 19.3682C32.1464 17.984 34.7641 17.6299 37.1768 18.3983ZM36.2362 27.4583C36.1883 26.3653 35.4823 25.4199 34.4697 25.0928C34.0933 24.8504 33.926 24.3742 34.0648 23.9395C34.2035 23.5048 34.6122 23.224 35.0547 23.2595C36.7651 23.8162 37.9825 25.3795 38.1404 27.2218C38.1727 27.4794 38.1035 27.7395 37.9483 27.9441C37.793 28.1486 37.5647 28.2804 37.3145 28.3099C36.7891 28.3799 36.3075 27.9995 36.2362 27.4583Z'
        fill={stroke}
      />
    </svg>
  );
};

export default IconHeart;
