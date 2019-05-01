import { css } from 'styled-components';

const styleModifierByProp = (rule, styles) => props => props[rule.prop] === rule.value && css`
  ${styles}
`;

export default styleModifierByProp;
