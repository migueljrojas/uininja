import PropTypes from 'prop-types';
import { Logo, LogoOutline } from 'modules/logo';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { getFromTheme } from 'utils/theme-manager';
import styleModifierByProp from 'utils/styleModifier';
import Menu from './headerMenu';
import ThemeSwitcher from './themeSwitcher';

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

const LogoWrapperModifier = `
  transform: translate3d(0, 30vh, 0) scale3d(3.3,3.3,3.3);
`;

const LogoWrapper = styled.div`
  position: relative;
  left: auto;
  height: 100%;
  transform: translate3d(0,0,0) scale3d(1,1,1);
  transition: ${getFromTheme('transition')};
  transform-origin: left center;

  ${styleModifierByProp({ prop: 'page', value: 'home' }, LogoWrapperModifier)}
`;

const StyledLogo = styled(Logo)`
  width: auto;
  height: 100%;
  opacity: 0;
  animation: ${fadeIn} 1s 1s linear forwards;
  fill: ${getFromTheme('logo.fillColor')};
  transition: ${getFromTheme('transition')};

  .--red-fill {
    fill: ${getFromTheme('common.accentColor')};
    transition: ${getFromTheme('transition')};
  }

  ._line {
    stroke: ${getFromTheme('logo.dividerColor')};
    transition: ${getFromTheme('transition')};
  }
`;

const StyledLogoOutline = styled(LogoOutline)`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: ${dash} 1s linear forwards, ${fadeOut} 1s 0.5s linear forwards;
  transition: ${getFromTheme('transition')};

  ._path {
    stroke: ${getFromTheme('logo.fillColor')};
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 7.5% 0 7.5%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 2;
`;

const UIHeader = (props) => {
  const { switchTheme, page } = props;

  return (
    <Header>
      <LogoWrapper page={page}>
        <Link href="/">
          <a>
            <StyledLogo />
            <StyledLogoOutline />
          </a>
        </Link>
      </LogoWrapper>
      <NavWrapper>
        <nav>
          <Menu />
        </nav>
        <ThemeSwitcher switchTheme={switchTheme} />
      </NavWrapper>
    </Header>
  );
};

UIHeader.propTypes = {
  switchTheme: PropTypes.func,
  page: PropTypes.string,
};

export default UIHeader;
