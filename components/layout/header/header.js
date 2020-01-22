import PropTypes from 'prop-types';
import { Logo, LogoOutline } from 'modules/logo';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { getFromTheme } from 'utils/theme-manager';
import styleModifierByProp from 'utils/styleModifier';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Menu from './headerMenu';
import ThemeSwitcher from './themeSwitcher';

const dash = keyframes`
  to {stroke-dashoffset: 0;}
`;
const fadeIn = keyframes`
  to {opacity: 1;}
`;
const fadeOut = keyframes`
  to {opacity: 0;}
`;

const inM = keyframes`
  50%{transform:rotate(0deg);}
  100%{transform:rotate(45deg);}
`;

const inT = keyframes`
  0%{transform: translateY(0px) rotate(0deg);}
  50%{transform: translateY(9px) rotate(0deg);}
  100%{transform: translateY(9px) rotate(135deg);}
`;

const outM = keyframes`
  50%{transform:rotate(0deg);}
  100%{transform:rotate(45deg);}
`;

const outT = keyframes`
  0%{transform: translateY(0px) rotate(0deg);}
  50%{transform: translateY(9px) rotate(0deg);}
  100%{transform: translateY(9px) rotate(135deg);}
`;

const inBtm = keyframes`
  0%{transform: translateY(0px) rotate(0deg);}
  50%{transform: translateY(-9px) rotate(0deg);}
  100%{transform: translateY(-9px) rotate(135deg);}
`;

const outBtm = keyframes`
  0%{transform: translateY(0px) rotate(0deg);}
  50%{transform: translateY(-9px) rotate(0deg);}
  100%{transform: translateY(-9px) rotate(135deg);}
`;

const LogoWrapperModifier = `
  transform: translate3d(0, 30vh, 0) scale3d(1.5,1.5,1.5);

  @media only screen and (min-width: 1200px) {
    transform: translate3d(0, 30vh, 0) scale3d(3.3,3.3,3.3);
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  left: auto;
  height: 100%;
  transform: translate3d(0,0,0) scale3d(.5,.5,.5);
  transition: ${getFromTheme('transition')};
  transform-origin: left center;
  z-index: 10000;
  width: 40%;

  @media only screen and (min-width: 1200px) {
    transform: translate3d(0,0,0) scale3d(1,1,1);
  }

  ${styleModifierByProp({ prop: 'page', value: 'home' }, LogoWrapperModifier)};
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
  padding: 0 7.5%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
  width: 100%;
  background: ${getFromTheme('common.mainBackground')};

  @media only screen and (min-width: 1200px) {
    background: transparent;
    padding: 20px 7.5% 0 7.5%;
  }
`;

const NavWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  transform: translateX(-100%);
  background: ${getFromTheme('common.mainBackground')};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all .5s cubic-bezier(.785, .135, .15, .86);

  @media only screen and (min-width: 1200px) {
    justify-content: flex-end;
    flex-direction: row;
    background: none;
    flex-grow: 2;
    transform: translateX(0);
    height: auto;
    width: auto;
    position: static;
  }

  &.-open {
    transition: all .5s cubic-bezier(.785, .135, .15, .86);
    transform: translateX(0);
  }
`;

const Hamburguer = styled.div`
  cursor: pointer;
  min-width: 25px;
  margin-left: 20px;
  z-index: 2000;

  @media only screen and (min-width: 1200px) {
    display: none;
  }

  span {
      background-color: red;
      border-radius: 2px;
      content: '';
      display: block;
      width: 100%;
      height: 2px;

      &:nth-child(1) {
          animation: ${outT} 0.6s ease backwards;
          animation-direction:reverse;
      }
      &:nth-child(2) {
          margin: 7px 0;
          animation: ${outM} 0.6s ease backwards;
          animation-direction:reverse;
      }
      &:nth-child(3) {
          animation: ${outBtm} 0.6s ease backwards;
          animation-direction:reverse;
      }
  }

  &.-open {
    span:nth-child(1) {
        animation: ${inT} 0.6s ease forwards;
    }
    span:nth-child(2) {
        animation: ${inM} 0.6s ease forwards;
    }
    span:nth-child(3) {
        animation: ${inBtm} 0.6s ease forwards;
    }
  }
`;


const UIHeader = (props) => {
  const { switchTheme, page } = props;
  const [isOpen, setOpenState] = useState(false);
  const router = useRouter();

  const closeNavFromMenuItem = (value) => {
    setOpenState(value);
  };

  return (
    <Header>
      <LogoWrapper
        onClick={() => { closeNavFromMenuItem(false); }}
        page={page}
      >
        <Link href="/">
          <a>
            <StyledLogo />
            <StyledLogoOutline />
          </a>
        </Link>
      </LogoWrapper>
      <NavWrapper
        className={isOpen ? '-open' : null}
      >
        <nav>
          <Menu
            closeNav={closeNavFromMenuItem}
            path={router.asPath}
          />
        </nav>
      </NavWrapper>
      <ThemeSwitcher switchTheme={switchTheme} />
      <Hamburguer
        className={isOpen ? '-open' : null}
        onClick={() => setOpenState(!isOpen)}
      >
        <span />
        <span />
        <span />
      </Hamburguer>
    </Header>
  );
};

UIHeader.propTypes = {
  switchTheme: PropTypes.func,
  page: PropTypes.string,
};

export default UIHeader;
