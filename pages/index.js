import React, { Component } from 'react';

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
      <div>
        <h1>Hello {name}</h1>
        <button
          onClick={() => {
            this.changeName('Miguel');
          }}
          type="submit"
        >
          Cambiar Nombre
        </button>
      </div>
    );
  }
}

export default Home;
