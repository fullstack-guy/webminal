import React from 'react';
import Image from 'next/image';
import Input from '../Input/Input';
import Head from 'next/head';

const Header = () => {
  <Head>
    <title>My page title</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta
      name='description'
      content='Free GNU/Linux Online Terminal and Programming platform '
    />
  </Head>;
  return (
    <header className='default-container'>
      <div className='flex justify-between px-4 items-center'>
        <div>
          <Image
            src='/images/logo.jpeg'
            className='logo object-contain'
            width='200px'
            height='80px'
            alt='Website logo'
          />
          {/* <Image
            src='/images/logo-small.jpg'
            className='small-logo object-contain '
            width='150px'
            height='50px'
            alt='Website logo'
          /> */}
        </div>
        <div>
          <Input placeholder='Search something...' />
        </div>
      </div>
    </header>
  );
};

export default Header;
