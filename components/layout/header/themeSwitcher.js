import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getFromTheme } from 'utils/theme-manager';
import { SunIcon, MoonIcon } from 'modules/icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.button`
  border: 0;
  background: none;
  
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Track = styled.div`
  width: 30px;
  height: 14px;
  background: ${getFromTheme('themeSwitcher.trackColor')};
  position: relative;
  border-radius: 99px;
  transition: ${getFromTheme('transition')};
`;

const Thumb = styled.span`
  display: block;
  position: absolute;
  left: -10px;
  top: 50%;
  transform: ${getFromTheme('themeSwitcher.thumbPosition')};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: ${getFromTheme('themeSwitcher.thumbColor')};
  transition: ${getFromTheme('transition')};
`;

const Icon = `
  fill: #999;
`;

const StyledSunIcon = styled(SunIcon)`
  ${Icon}
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const StyledMoonIcon = styled(MoonIcon)`
  ${Icon}
  width: 18px;
  height: 18px;
  margin-left: 10px;
`;

const ThemeSwitcher = (props) => {
  const { switchTheme } = props;

  return (
    <Wrapper>
      <StyledSunIcon />
      <SwitchButton
        onClick={() => switchTheme()}
        type="button"
      >
        <Track>
          <Thumb />
        </Track>
      </SwitchButton>
      <StyledMoonIcon />
    </Wrapper>
  );
};

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func,
};

export default ThemeSwitcher;
