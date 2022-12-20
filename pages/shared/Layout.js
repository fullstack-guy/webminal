import React from 'react';
import Header from '../../components/Header/Header';
import OptionMenu from '../../components/OptionMenu/OptionMenu';
import CourseInfo from '../../components/CoruseInfo/CurseInfo';

const Layout = ({ session, children }) => {
  return (
    <>
      <Header />
      <div className='default-container flex flex-col md:flex-row px-5'>
        <OptionMenu session={session}/>

        <div className='flex-grow'> {children}</div>
        <div>
          <CourseInfo session={session} />
        </div>
      </div>
    </>
  );
};

export default Layout;
