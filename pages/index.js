import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div>Headers</div>
      <h2>H1 Example</h2>
      <h3>H1 Example</h3>
      <h4>H1 Example</h4>
      <h5>H1 Example</h5>
      <h6>H1 Example</h6>
      <div>Colors:</div>
      <div className='text-accent-1'>Accent 1</div>
      <div className='text-tertiary'>Accent 1</div>
      <div className='text-shades-100'>shade 100</div>
      <div className='text-shades-200'>shade 200</div>
      <div className='text-shades-300'>shade 300</div>
      <div className='text-shades-400'>shade 400</div>
      <div className='text-shades-500'>shade 500</div>
      <div className='text-shades-600'>shade 600</div>

      <div className='text-blue-500'>test</div>
    </div>
  );
}
