import { css } from 'styled-components';

const styleModifierByProp = (prop, styles) => props => props[prop] && css`
  ${styles}
`;

export default styleModifierByProp;
