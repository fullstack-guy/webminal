import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      Hello
      <h1>Hello</h1>
      <div className='text-accent-1'>Accent 1</div>
      <div className='text-tertiary'>Accent 1</div>
      <div className='text-shades-100'>shade 100</div>
      <div className='text-shades-200'>shade 200</div>
      <div className='text-shades-300'>shade 300</div>
      <div className='text-shades-400'>shade 400</div>
      <div className='text-shades-500'>shade 500</div>
      <div className='text-shades-600'>shade 600</div>
    </div>
  );
}
