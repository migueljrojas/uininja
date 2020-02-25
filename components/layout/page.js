import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import setActiveTheme, { getFromTheme } from 'utils/theme-manager';
import UIHead from './head';
import UIHeader from './header/header';
import UIFooter from './footer';

const Wrapper = styled.div`
  transition: all 0.3s ease;
  font-family: ${getFromTheme('fontFamily')};
  background: ${getFromTheme('common.mainBackground')};
  overflow: hidden;
  min-height: 100vh;
  
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 30px);
  padding-top: 70px;
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
    const { children, page } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <UIHead title="UI Ninja - Test Title" />
          <UIHeader
            page={page}
            switchTheme={this.switchTheme}
          />
          <Main>{children}</Main>
          <UIFooter />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

UIPage.propTypes = {
  children: PropTypes.any,
  page: PropTypes.string,
};

export default UIPage;
