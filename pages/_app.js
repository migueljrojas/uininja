import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import normalizeCss from 'constants/normalizeCss';
import UIPage from 'layoutComponents/page';
import Router from 'next/router';

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

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
});
Router.events.on('routeChangeComplete', url => console.log(`Loaded: ${url}`));

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
        <UIPage page={pageProps.pageName || null}>
          <Component {...pageProps} />
        </UIPage>
      </Container>
    );
  }
}

export default MyApp;
