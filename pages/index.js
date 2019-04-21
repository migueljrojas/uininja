import React from 'react';
import styled from 'styled-components';
import UIPage from 'layoutComponents/page';
import { UIContainer } from 'modules/grid';
import ImageOverlay from 'pageComponents/home/imageOverlay';
import Tagline from 'pageComponents/home/tagline';

// class Home extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {

//     return (
//       <UIPage>
//         <h1>Home</h1>
//       </UIPage>
//     );
//   }
// }

const StyledUIContainer = styled(UIContainer)`
  padding-top: 70px;
`;

const Home = () => (
  <UIPage page="home">
    <StyledUIContainer>
      <ImageOverlay />
      <Tagline />
    </StyledUIContainer>
  </UIPage>
);

export default Home;
