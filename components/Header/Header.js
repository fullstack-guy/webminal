import React from 'react';
import Image from 'next/image';
import Input from '../Input/Input';
import Head from 'next/head';
import Link from 'next/link';
const Header = () => {
  <Head>
    <title>Webminal - Learn and Practise Linux online, Programming online</title>
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
          <Link href='/' passHref className='cursor-pointer'>
            <Image
              src='/images/logo.jpeg'
              className='logo object-contain cursor-pointer'
              width={200}
              height={80}
              alt='Website logo'
            />
          </Link>
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
