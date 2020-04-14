import PropTypes from 'prop-types';
import { Logo, LogoOutline } from 'modules/logo';
import styled, { keyframes, css } from 'styled-components';
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

// const inT = keyframes`
//   0%{transform: translateY(0px) rotate(0deg);}
//   50%{transform: translateY(9px) rotate(0deg);}
//   100%{transform: translateY(9px) rotate(135deg);}
// `;

// const inM = keyframes`
//   50%{transform:rotate(0deg);}
//   100%{transform:rotate(45deg);}
// `;

// const inBtm = keyframes`
//   0%{transform: translateY(0px) rotate(0deg);}
//   50%{transform: translateY(-9px) rotate(0deg);}
//   100%{transform: translateY(-9px) rotate(135deg);}
// `;

const outT = keyframes`
  0%{transform: translateY(0px) rotate(0deg);}
  50%{transform: translateY(9px) rotate(0deg);}
  100%{transform: translateY(9px) rotate(135deg);}
`;

const outM = keyframes`
  50%{transform:rotate(0deg);}
  100%{transform:rotate(45deg);}
`;

const outBtm = keyframes`
  0%{transform: translateY(0px) rotate(0deg);}
  50%{transform: translateY(-9px) rotate(0deg);}
  100%{transform: translateY(-9px) rotate(135deg);}
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  @media only screen and (min-width: 1200px) {
    display: flex;
  }

  div {
    transform: translateX(-100%);
    opacity: 0;

    @media only screen and (min-width: 1200px) {
      transform: translateY(-100%);
    }
  }

  div:nth-child(1) {
    transition: all .5s 1.6s ${getFromTheme('common.headerEaseing')};
  }

  div:nth-child(2) {
    transition: all .5s 1.5s ${getFromTheme('common.headerEaseing')};
  }

  div:nth-child(3) {
    transition: all .5s 1.4s ${getFromTheme('common.headerEaseing')};
  }

  ${props => props.open && css`
      div {
        transform: translateX(0);
        opacity: 1;

        @media only screen and (min-width: 1200px) {
          transform: translateY(0);
        }
      }

      div:nth-child(1) {
        transition: all .5s ${getFromTheme('common.headerEaseing')};
      }

      div:nth-child(2) {
        transition: all .5s .1s ${getFromTheme('common.headerEaseing')};
      }

      div:nth-child(3) {
        transition: all .5s .2s ${getFromTheme('common.headerEaseing')};
      }
  `}
`;

const BackgroundBar = styled.div`
  background: black;
  z-index: 10000;
  width: 100%;
  height: 33.3334vh;

  @media only screen and (min-width: 1200px) {
    width: 33.3334%;
    height: 100%;
  }
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
  z-index: 2000;
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

  ${props => props.page === 'project' && css`
    @media only screen and (min-width: 1200px) {
      background: ${getFromTheme('project.heroBackground')};
    }
  `};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  transition: all 2s 1s ${getFromTheme('common.headerEaseing')};
  transform: translateX(-100%);
  opacity: 0;

  @media only screen and (min-width: 1200px) {
    transform: translateY(-100%);
    width: 33.33%;
    height: 100vh;
    justify-content: flex-start;
  }

  ${props => props.open && css`
    opacity: 1;
    transform: translateX(0);
    transition: all 2s ${getFromTheme('common.headerEaseing')};

    @media only screen and (min-width: 1200px) {
      transform: translateY(0);
    }
  `}
`;

const Hamburguer = styled.div`
  cursor: pointer;
  min-width: 25px;
  margin-left: 20px;
  z-index: 2000;

  span {
      background-color: ${getFromTheme('common.linkHover')};
      border-radius: 2px;
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      transition: all .3s 1s ${getFromTheme('common.headerEaseing')};

      &:nth-child(1) {
        /* animation: ${outT} 0.6s ease backwards;
        animation-direction:reverse; */
        transform: translateY(0px) rotate(0deg);      
      }
      
      &:nth-child(2) {
        margin: 7px 0;
        transform:rotate(0deg);
        /* animation: ${outM} 0.6s ease backwards;
        animation-direction:reverse; */
      }
      &:nth-child(3) {
        transform: translateY(0px) rotate(0deg);      
        /* animation: ${outBtm} 0.6s ease backwards;
        animation-direction:reverse; */
      }
  }

  ${props => props.open && css`
    span {
      transition: all .3s ${getFromTheme('common.headerEaseing')};
    }

    span:nth-child(1) {
      transform: translateY(9px) rotate(135deg);
      ${''}
    }
    span:nth-child(2) {
      transform:rotate(45deg);
        ${''}
    }
    span:nth-child(3) {
      transform: translateY(-9px) rotate(135deg);
        ${''}
    }
  `}
`;

const UIHeader = (props) => {
  const { switchTheme, page } = props;
  const [isOpen, setOpenState] = useState(false);
  const router = useRouter();

  const closeNavFromMenuItem = (value) => {
    setOpenState(value);
  };

  return (
    <Header page={page}>
      <BackgroundWrapper open={isOpen}>
        <BackgroundBar />
        <BackgroundBar />
        <BackgroundBar />
      </BackgroundWrapper>
      <LogoWrapper
        onClick={() => { closeNavFromMenuItem(false); }}
        open={isOpen}
        page={page}
      >
        <Link href="/">
          <a>
            <StyledLogo />
            <StyledLogoOutline />
          </a>
        </Link>
      </LogoWrapper>
      <HeaderContainer>
        <NavWrapper
          open={isOpen}
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
          onClick={() => setOpenState(!isOpen)}
          open={isOpen}
        >
          <span />
          <span />
          <span />
        </Hamburguer>
      </HeaderContainer>
    </Header>
  );
};

UIHeader.propTypes = {
  switchTheme: PropTypes.func,
  page: PropTypes.string,
};

export default UIHeader;
