import vars from './variables';

export default {
  themeId: 'light',
  common: {
    mainBackground: vars.colors.lightestGray,
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
  about: {
    bannerColor: vars.colors.darkGray,
    bannerColorActive: vars.colors.intenseRed,
  },
  ourWork: {
    title: vars.colors.red,
  },
  contact: {
    title: vars.colors.black,
    inputBackground: vars.colors.darkestGray,
    labelColor: vars.colors.black,
    buttonBackground: vars.colors.intenseRed,
    buttonColor: vars.colors.white,
  },
  footer: {
    background: vars.colors.white,
  },
  button: {
    shadow: '0 3px 3px rgba(0,0,0,.15)',
    shadowPressed: '0 0 3px rgba(0,0,0,.15)',
  },
};
