import React from 'react';
import styled from 'styled-components';
import UIPage from 'layoutComponents/page';
import { UIContainer } from 'modules/grid';

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

const Title = styled.h1`
  margin: 0;
`;

const StyledUIContainer = styled(UIContainer)`
  padding-top: 70px;
`;

const Home = () => (
  <UIPage>
    <StyledUIContainer>
      <Title>Home</Title>
    </StyledUIContainer>
  </UIPage>
);

export default Home;
