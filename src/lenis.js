let lenisInstance = null;

export const setLenis = (instance) => {
  lenisInstance = instance;
};

export const scrollTo = (target, options = {}) => {
  if (!lenisInstance) return;
  lenisInstance.scrollTo(target, options);
};
