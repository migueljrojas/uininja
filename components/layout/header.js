import PropTypes from 'prop-types';
import { Logo, LogoOutline } from 'components/modules/logo';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

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

const Button = styled.button`
  background: ${props => props.theme.mainColor};
`;

const LogoWrapper = styled.div`
  position: absolute;
  width: 25vw;
  top: 15vh;
  left: 7.5%;
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation: ${fadeIn} 1s 1s linear forwards;
  fill: ${props => props.theme.logoFillColor};
  transition: all 0.3s ease;

  .--red-fill {
    fill: ${props => props.theme.accentColor};
    transition: all 0.3s ease;
  }

  ._line {
    stroke: ${props => props.theme.logoDividerColor};
    transition: all 0.3s ease;
  }
`;

const StyledLogoOutline = styled(LogoOutline)`
  position: absolute;
  top: 0;
  left: 0;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: ${dash} 1s linear forwards, ${fadeOut} 1s 0.5s linear forwards;
  transition: all 0.3s ease;

  ._path {
    stroke: ${props => props.theme.logoFillColor};
  }
`;

const UIHeader = props => {
  const { switchTheme } = props;

  return (
    <header>
      <LogoWrapper>
        <Link href="/index">
          <a>
            <StyledLogo />
            <StyledLogoOutline />
          </a>
        </Link>
      </LogoWrapper>

      <nav>
        <ul>
          <li>
            <Link as="/who-we-are"
href="/about">
              <a>Who we are</a>
            </Link>
          </li>
          <li>
            <Link as="/contact-us"
href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>

      <Button onClick={() => switchTheme()}
type="button">
        Switch Theme
      </Button>
    </header>
  );
};

UIHeader.propTypes = {
  switchTheme: PropTypes.func
};

export default UIHeader;
