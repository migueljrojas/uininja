import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,300,300i,500,500i,700,700i,900,900i');
    font-family: 'Arial', sans-serif;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
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
