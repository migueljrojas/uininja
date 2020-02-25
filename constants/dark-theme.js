import vars from './variables';

export default {
  themeId: 'dark',
  common: {
    mainBackground: vars.colors.corpBlack,
    accentColor: vars.colors.intenseRed,
    link: vars.colors.lightGray,
    linkHover: vars.colors.intenseRed,
    textColor: vars.colors.white,
  },
  logo: {
    fillColor: vars.colors.white,
    dividerColor: vars.colors.midGray,
  },
  themeSwitcher: {
    thumbColor: vars.colors.midGray,
    trackColor: vars.colors.darkGray,
    thumbPosition: 'translate3d(30px, -50%, 0)',
  },
  home: {
    imageOpacity: '.05',
  },
  about: {
    bannerColor: vars.colors.black,
    bannerColorActive: vars.colors.intenseRed,
  },
  ourWork: {
    title: vars.colors.red,
  },
  contact: {
    title: vars.colors.white,
    inputBackground: vars.colors.lightGray,
    labelColor: vars.colors.white,
    buttonBackground: vars.colors.intenseRed,
    buttonColor: vars.colors.white,
  },
  footer: {
    background: vars.colors.black,
  },
  button: {
    shadow: '0 3px 3px rgba(0,0,0,.3)',
    shadowPressed: '0 0 3px rgba(0,0,0,.3)',
  },
};
