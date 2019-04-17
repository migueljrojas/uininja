import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import UIHead from './head';
import UIHeader from './header';
import UIFooter from './footer';
import getCurrentTheme from '../utils/theme-manager';

class UIPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {}
    };
  }

  componentWillMount() {
    const currentTheme = getCurrentTheme();

    this.setState({
      theme: currentTheme
    });
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div>
          <UIHead title="UI Ninja - Test Title" />
          <UIHeader />
          <main>{children}</main>
          <UIFooter />
        </div>
      </ThemeProvider>
    );
  }
}

UIPage.propTypes = {
  children: PropTypes.any
};

export default UIPage;
