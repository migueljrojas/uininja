import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';
import valid from 'constants/validators';
import styleModifierByProp from 'utils/styleModifier';
import match from 'utils/match';
import { useRouter } from 'next/router';

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

const buttonConfig = css`
  border-radius: 3px;
  box-shadow: ${getFromTheme('button.shadow')};
  height: ${props => getFromTheme(`buttonBase.size-${props.size}`)};
  padding: 0 ${props => getFromTheme(`buttonBase.padding-${props.size}`)};
  display: inline-flex;
  align-items: center;
  font-size: ${props => getFromTheme(`buttonBase.font-size-${props.size}`)};
  font-weight: 400;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: ${getFromTheme('transition')};

  &:focus {
    outline: none;
  }

  &:before {
    content: '';
    position: absolute;
    width: 105%;
    margin: auto;
    height: 0;
    padding-bottom: 105%;
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

  ${(props) => {
    const { buttonType } = props;
    const buttonStyles = (
      match(buttonType)
        .on(val => val === 'outline', () => buttonOutline)
        .otherwise(() => buttonFilled)
    );

    return styleModifierByProp({ prop: 'buttonType', value: buttonType }, buttonStyles);
  }}
`;

const StyledButton = styled.button`
  ${buttonConfig}
`;

const StyledAnchor = styled.a`
  ${buttonConfig}
`;


const Button = (props) => {
  const router = useRouter();

  const handleClick = (href) => {
    console.log('working');

    router.push(href);
  };

  const {
    buttonType = 'filled',
    children,
    className,
    disabled,
    size = 'md',
    callback = () => {},
    href,
  } = props;

  if (href && href !== '') {
    return (
      <StyledAnchor
        buttonType={buttonType}
        className={className}
        disabled={disabled}
        onClick={() => handleClick(href)}
        size={size}
      >
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledButton
      buttonType={buttonType}
      className={className}
      disabled={disabled}
      onClick={callback}
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
  callback: PropTypes.any,
  href: PropTypes.any,
};

export default Button;
