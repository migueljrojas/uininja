import React from 'react';
import UIPage from '../components/layout/page';
import Hero from '../components/pages/home/hero';
import AboutUs from '../components/pages/home/about';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Cesar'
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName(name) {
    this.setState({
      name
    });
  }

  render() {
    const { name } = this.state;

    return (
      <UIPage>
        <Hero changeName={this.changeName} name={name} />
        <AboutUs />
      </UIPage>
    );
  }
}

export default Home;
