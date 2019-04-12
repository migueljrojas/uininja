import React from 'react';
import UIPage from '../components/layout/page';
// Stylesheets
import '../static/styles/pages/home.scss';
import '../static/styles/pages/about.scss';

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
      <UIPage lang="eng">
        <h1 className="home__title">Hello {name}</h1>
        <button
          className="about__button"
          onClick={() => {
            this.changeName('Miguel');
          }}
          type="submit"
        >
          Cambiar Nombre
        </button>
      </UIPage>
    );
  }
}

export default Home;
