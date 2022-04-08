import React, { useState, createContext } from 'react';
import Home from '../images/icons/Home';
import Saved from '../images/icons/Saved';
import User from '../images/icons/User';

export const MainMenuContext = createContext();

export const MainMenuProvider = ({ children }) => {
  const [tempMenuOptions, setTempMenuOptions] = useState([
    { text: 'Home', icon: <Home />, isSelected: true, url: '/' },
    {
      text: 'My Courses',
      icon: <Saved />,
      isSelected: false,
      url: '/my-courses/',
    },
    {
      text: 'Profile',
      icon: <User />,
      isSelected: false,
      url: '/profile',
    },
  ]);

  return (
    <MainMenuContext.Provider value={[tempMenuOptions, setTempMenuOptions]}>
      {children}
    </MainMenuContext.Provider>
  );
};
