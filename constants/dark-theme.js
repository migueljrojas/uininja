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
  ourWork: {
    title: vars.colors.red,
  },
  footer: {
    background: vars.colors.black,
  },
};
