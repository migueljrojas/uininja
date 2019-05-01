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
  ourWork: {
    title: vars.colors.red,
  },
  footer: {
    background: vars.colors.white,
  },
  button: {
    shadow: '0 3px 3px rgba(0,0,0,.15)',
    shadowPressed: '0 0 3px rgba(0,0,0,.15)',
  },
};
