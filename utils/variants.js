export const moveUpDown = (y) => {
  return {
    hidden: {
      opacity: 0,
      y: y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.3, ease: 'easeOut' },
    },
  };
};

export const fadeIn = (obj) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 0.5, ease: 'easeOut', ...obj },
    },
  };
};

export const moveLeftRight = (x) => {
  return {
    hidden: {
      x,
    },
    visible: {
      x: 0,
      transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
    },
  };
};

export const moveSideUpDown = (y, x) => {
  return {
    hidden: {
      x: x,
      y: y,
    },
    visible: {
      y: 0,
      x: 0,
      transition: { delay: 0.2, duration: 0.3, ease: 'easeOut' },
    },
  };
};
