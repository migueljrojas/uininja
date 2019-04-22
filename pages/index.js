import React from 'react';
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

const Home = () => (
  <UIPage page="home">
    <UIContainer>
      <ImageOverlay />
      <Tagline />
    </UIContainer>
  </UIPage>
);

export default Home;
