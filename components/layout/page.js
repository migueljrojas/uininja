import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import setActiveTheme from 'utils/theme-manager';
import UIHead from './head';
import UIHeader from './header/header';
import UIFooter from './footer';

const Wrapper = styled.div`
  transition: all 0.3s ease;
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.mainBackground};
  min-height: 100vh;
  max-width: 100%;
`;

class UIPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {},
      currentThemeId: null,
    };

    this.switchTheme = this.switchTheme.bind(this);
  }

  componentWillMount() {
    const { currentThemeId: isSetTheme } = this.state;

    if (!isSetTheme) {
      const currentTheme = setActiveTheme();

      this.setState({
        theme: currentTheme,
        currentThemeId: currentTheme.themeId,
      });
    }
  }

  switchTheme() {
    const { currentThemeId } = this.state;
    const newThemeId = currentThemeId === 'light' ? 'dark' : 'light';
    const newTheme = setActiveTheme(newThemeId);

    this.setState({
      theme: newTheme,
      currentThemeId: newThemeId,
    });
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <UIHead title="UI Ninja - Test Title" />
          <UIHeader switchTheme={this.switchTheme} />
          <main>{children}</main>
          <UIFooter />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

UIPage.propTypes = {
  children: PropTypes.any,
};

export default UIPage;
