import React, { useState, useEffect } from 'react';
import CoursesFiltersIcons from '../../Images/icons/CoursesFiltersIcons';
import IconWindow from '../../Images/icons/IconWindow';
import CoursesListMenuItem from '../CoursesList/CoursesListMenuItem';

const CoursesFiltersMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    console.log(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    console.log('filter rerender');
  }, []);
  const [tempMenuOptions, setTempMenuOptions] = useState([
    {
      isSelected: true,
      text: 'New',
      icon: <CoursesFiltersIcons index={0} fill={'#52C3FF'} />,
    },
    {
      isSelected: false,

      text: 'Popular',
      icon: <CoursesFiltersIcons index={1} fill={'#EAEAEA'} />,
    },
    {
      isSelected: false,
      text: 'Free',
      icon: <CoursesFiltersIcons index={2} fill={'#EAEAEA'} />,
    },
    {
      isSelected: false,
      text: 'Pro',
      icon: <CoursesFiltersIcons index={3} fill={'#EAEAEA'} />,
    },
  ]);

  return (
    <div className='flex gap-4 mb-6'>
      {tempMenuOptions.map(({ text, icon }, index) => (
        <CoursesListMenuItem
          key={index}
          text={text}
          icon={icon}
          onClick={() => {
            const newOptions = tempMenuOptions.map((item, index) => ({
              ...item,
              isSelected: false,
              icon: <CoursesFiltersIcons index={index} fill={'#EAEAEA'} />,
            }));
            const option = {
              ...newOptions[index],
              isSelected: true,
              icon: <CoursesFiltersIcons index={index} fill={'#52C3FF'} />,
              iconFill: 'red',
            };
            newOptions[index] = option;
            setTempMenuOptions(newOptions);
            setSelectedIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default CoursesFiltersMenu;
