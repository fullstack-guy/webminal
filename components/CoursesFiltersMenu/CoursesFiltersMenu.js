import React, { useState, useEffect } from 'react';
import IconWindow from '../../Images/icons/IconWindow';
import CoursesListMenuItem from '../CoursesList/CoursesListMenuItem';

const CoursesFiltersMenu = () => {
  const [tempMenuOptions, setTempMenuOptions] = useState([
    { text: 'New', icon: <IconWindow />, isSelected: true },
    {
      text: 'Popular',
      icon: <IconWindow fill='red' />,
      isSelected: false,
    },
    {
      text: 'Free',
      icon: <IconWindow />,
      isSelected: false,
    },
    {
      text: 'Pro',
      icon: <IconWindow />,
      isSelected: false,
    },
  ]);
  return (
    <div className='flex gap-4 mb-6'>
      {tempMenuOptions.map(({ text, icon }, index) => (
        <CoursesListMenuItem key={index} text={text} icon={icon} />
      ))}
    </div>
  );
};

export default CoursesFiltersMenu;
