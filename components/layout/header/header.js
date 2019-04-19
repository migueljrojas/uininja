import PropTypes from 'prop-types';
import { Logo, LogoOutline } from 'components/modules/logo';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
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


const LogoWrapper = styled.div`
  position: relative;
  height: 100%;
  left: auto;
`;

const StyledLogo = styled(Logo)`
  width: auto;
  height: 100%;
  opacity: 0;
  animation: ${fadeIn} 1s 1s linear forwards;
  fill: ${props => props.theme.logoFillColor};
  transition: all 0.3s ease;

  .--red-fill {
    fill: ${props => props.theme.accentColor};
    transition: ${props => props.theme.transition};
  }

  ._line {
    stroke: ${props => props.theme.logoDividerColor};
    transition: ${props => props.theme.transition};
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
  transition: ${props => props.theme.transition};

  ._path {
    stroke: ${props => props.theme.logoFillColor};
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

`;

const NavWrapper = styled.div`
  display: flex;
`;

const UIHeader = (props) => {
  const { switchTheme } = props;

  return (
    <Header>
      <LogoWrapper>
        <Link href="/index">
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
};

export default UIHeader;
