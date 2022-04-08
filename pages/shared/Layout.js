import React from 'react';
import Header from '../../components/Header/Header';
import OptionMenu from '../../components/OptionMenu/OptionMenu';
import CourseInfo from '../../components/CoruseInfo/CurseInfo';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='default-container flex flex-col md:flex-row px-5'>
        <OptionMenu />

        <div className='flex-grow'> {children}</div>
        <div>
          <CourseInfo />
        </div>
      </div>
    </>
  );
};

export default Layout;
