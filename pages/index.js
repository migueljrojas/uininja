import React from 'react';
import styled from 'styled-components';
import { UIContainer } from 'modules/grid';
import ImageOverlay from 'pageComponents/home/imageOverlay';
import Tagline from 'pageComponents/home/tagline';
import Button from 'modules/buttons';

const StyledUIContainer = styled(UIContainer)`
  padding-top: 70px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 70%;
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

  render() {
    return (
      <StyledUIContainer>
        <ImageOverlay />
        <StyledTagline />
        <StyledButton
          buttonType="outline"
          size="lg"
        >
          {'Let\'s start a project!'}
        </StyledButton>
      </StyledUIContainer>
    );
  }
}

export default Home;
