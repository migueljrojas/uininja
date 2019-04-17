import lightTheme from '../../constants/light-theme';
import darkTheme from '../../constants/dark-theme';

const isDaytime = () => {
  const newDateObject = new Date();
  const currentTime = newDateObject.getHours();

  return currentTime > 6 && currentTime < 19;
};

export default () => (isDaytime() ? lightTheme : darkTheme);
