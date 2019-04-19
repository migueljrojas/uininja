import baseTheme from 'constants/base-theme';
import lightTheme from 'constants/light-theme';
import darkTheme from 'constants/dark-theme';

const isDaytime = () => {
  const newDateObject = new Date();
  const currentTime = newDateObject.getHours();

  return currentTime > 6 && currentTime < 19;
};

const initTheme = () => (isDaytime() ? lightTheme : darkTheme);

const setTheme = (theme) => {
  if (theme) {
    return theme === 'light' ? lightTheme : darkTheme;
  }

  return initTheme();
};

export const getFromTheme = (valueInTheme) => {
  const values = valueInTheme.split('.');

  if (values.length > 1) {
    return props => props.theme[values[0]][values[1]];
  }

  return props => props.theme[values[0]];
};

export default (theme) => {
  const currentTheme = setTheme(theme);

  return { ...currentTheme, ...baseTheme };
};
