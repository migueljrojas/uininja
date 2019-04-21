import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';

const Footer = styled.footer`
  height: 30px;
  background: ${getFromTheme('footer.background')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getFromTheme('common.textColor')};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: ${getFromTheme('transition')};
  opacity: .3;

  &:hover {
    opacity: 1;
    cursor: default;
  }
`;

const UIFooter = () => {
  const currentYear = Object.assign(new Date()).getFullYear();

  return (
    <Footer>
      <div>
        {`\u00A9 Copyright ${currentYear}. All rights reserved.`}
      </div>
    </Footer>
  );
};

export default UIFooter;
