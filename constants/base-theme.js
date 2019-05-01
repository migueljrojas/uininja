import vars from './variables';

export default {
  fontFamily: vars.fontFamily,
  transition: `all ${vars.duration} ${vars.easing}`,
  buttonBase: {
    'size-xs': `${vars.baseHeight / 2}px`,
    'size-sm': `${vars.baseHeight / 1.5}px`,
    'size-md': `${vars.baseHeight}px`,
    'size-lg': `${vars.baseHeight * 1.5}px`,
    'size-xl': `${vars.baseHeight * 2}px`,
    'font-size-xs': `${vars.baseHeight / 3.5}px`,
    'font-size-sm': `${vars.baseHeight / 3}px`,
    'font-size-md': `${vars.baseHeight / 2.5}px`,
    'font-size-lg': `${vars.baseHeight / 2}px`,
    'font-size-xl': `${vars.baseHeight / 1.5}px`,
  },
};
