import React from 'react';
import styled from 'styled-components';
import { UIContainer } from 'modules/grid';
import ImageOverlay from 'pageComponents/home/imageOverlay';
import Tagline from 'pageComponents/home/tagline';
import Button from 'modules/buttons';
import Router from 'next/router';

const StyledUIContainer = styled(UIContainer)`
  padding-top: 70px;
`;

const StyledCustomButton = styled(Button)`
  position: absolute;
  top: 75%;

  @media only screen and (min-width: 1200px) {
    top: 70%;
  }
`;

const StyledTagline = styled(Tagline)`
  position: absolute;
  top: 55%;
`;

class Home extends React.Component {
  static async getInitialProps() {
    const pageName = await 'home';
    return { pageName };
  }

  constructor() {
    super();

    this.state = {
    };
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <StyledUIContainer>
        <ImageOverlay />
        <StyledTagline />
        <StyledCustomButton
          callback={() => Router.push('/new-project', '/start-new-project')}
          size="lg"
        >
          {'Let\'s start a project!'}
        </StyledCustomButton>
      </StyledUIContainer>
    );
  }
}

export default Home;
