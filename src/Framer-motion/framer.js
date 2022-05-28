export const opacityAnimation = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  transition: {
    duration: 0.6,
    delay: 0.2,
    childrenDelay: 1,
  },
};

export const headerAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 1,
  },
};
