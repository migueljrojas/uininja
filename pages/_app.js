import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import normalizeCss from 'constants/normalizeCss';

const GlobalStyles = createGlobalStyle`
  ${normalizeCss}
  
  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,300,300i,500,500i,700,700i,900,900i');
    font-family: 'Montserrat', sans-serif;
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
