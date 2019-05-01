import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';
import valid from 'constants/validators';
import styleModifierByProp from 'utils/styleModifier';
import match from 'utils/match';

const buttonSizing = props => getFromTheme(`buttonBase.size-${props.size}`);

const buttonOutline = css`
  background: transparent;
  border: 2px solid ${getFromTheme('common.accentColor')};
  color: ${getFromTheme('common.accentColor')};
`;

const buttonFilled = css`
  background: ${getFromTheme('common.accentColor')};
  border: 2px solid ${getFromTheme('common.accentColor')};
  color: #fff;
`;

const StyledButton = styled.button`
  border-radius: 3px;
  box-shadow: ${getFromTheme('button.shadow')};
  height: ${props => buttonSizing(props)};
  padding: 0 ${props => buttonSizing(props)};
  display: inline-flex;
  align-items: center;
  font-size: ${props => getFromTheme(`buttonBase.font-size-${props.size}`)};
  font-weight: 400;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: ${getFromTheme('transition')};

  ${(props) => {
    const { buttonType } = props;
    const buttonStyles = (
      match(buttonType)
        .on(val => val === 'outline', () => buttonOutline)
        .otherwise(() => buttonFilled)
    );

    return styleModifierByProp({ prop: 'buttonType', value: buttonType }, buttonStyles);
  }}

  &:focus {
    outline: none;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    margin: auto;
    height: 0;
    padding-bottom: 100%;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    opacity: 0;
    transition: ${getFromTheme('transition')};
    background: rgba(0,0,0,.1);
    border-radius: 50%;
    transform-origin: center;
  }

  &:active {
    box-shadow: ${getFromTheme('button.shadowPressed')};
  }

  &:active:before {
    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
    opacity: 1;
  }

  &:disabled {
    opacity: .5;
    pointer-events: none;
    filter: grayscale(100%);
  }
`;

const Button = (props) => {
  const {
    buttonType = 'filled',
    children,
    className,
    disabled,
    size = 'md',
  } = props;

  return (
    <StyledButton
      buttonType={buttonType}
      className={className}
      disabled={disabled}
      size={size}
      type="button"
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(valid.buttonTypes),
  className: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(valid.sizes),
};

export default Button;
