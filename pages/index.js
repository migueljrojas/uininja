import React from 'react';
import UIPage from 'layoutComponents/page';
import Hero from 'pageComponents/home/hero';
import AboutUs from 'pageComponents/home/about';

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
