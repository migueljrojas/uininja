import React from 'react';
import styled from 'styled-components';
import { UIContainer } from 'modules/grid';
import ImageOverlay from 'pageComponents/home/imageOverlay';
import Tagline from 'pageComponents/home/tagline';

const StyledUIContainer = styled(UIContainer)`
  padding-top: 70px;
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
        <Tagline />
      </StyledUIContainer>
    );
  }
}

export default Home;
