import vars from './variables';

export default {
  themeId: 'light',
  common: {
    mainBackground: vars.colors.lighestGray,
    accentColor: vars.colors.red,
    link: vars.colors.darkestGray,
    linkHover: vars.colors.red,
    textColor: vars.colors.darkestGray,
  },
  logo: {
    fillColor: vars.colors.black,
    dividerColor: vars.colors.darkGray,
  },
  themeSwitcher: {
    thumbColor: vars.colors.midGray,
    trackColor: vars.colors.lightGray,
    thumbPosition: 'translate3d(0, -50%, 0)',
  },
  home: {
    imageOpacity: '.12',
  },
  footer: {
    background: vars.colors.white,
  },
};
