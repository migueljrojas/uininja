import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchButton = styled.button`
  border: 0;
  background: none;
  
  &:focus,
  &:active,
  &:hover {
    outline: none;
    box-shadow: none;
  }
`;

const Track = styled.div`
  width: 30px;
  height: 14px;
  background: ${props => props.theme.trackColor};
  position: relative;
  border-radius: 99px;
  transition: ${props => props.theme.transition};
`;

const Thumb = styled.span`
  display: block;
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.thumbColor};
  transition: ${props => props.theme.transition};
`;

const ThemeSwitcher = (props) => {
  const { switchTheme } = props;

  return (
    <Wrapper>
      <i />
      <SwitchButton
        onClick={() => switchTheme()}
        type="button"
      >
        <Track>
          <Thumb />
        </Track>
      </SwitchButton>
      <i />
    </Wrapper>
  );
};

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func,
};

export default ThemeSwitcher;
