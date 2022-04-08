import React from 'react';
import IconHeart from './IconHeart';
import IconPro from './IconPro';
import IconStar from './IconStar';
import IconWindow from './IconWindow';

const CoursesFiltersIcons = ({ index, fill }) => {
  const getMenuICon = () => {
    switch (index) {
      case 0: {
        return <IconWindow fill={fill} />;
      }
      case 1: {
        return <IconStar fill={fill} />;
      }
      case 2: {
        return <IconHeart fill={fill} />;
      }
      case 3: {
        return <IconPro fill={fill} />;
      }
      default: {
        return <IconWindow fill={fill} />;
      }
    }
  };

  return getMenuICon();
};

export default CoursesFiltersIcons;
