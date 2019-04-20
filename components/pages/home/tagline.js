import React from 'react';
import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';

const slogans = [
  'development',
  'design',
  'layouts',
];

const Tagline = styled.h1`
  color: ${getFromTheme('common.textColor')};
  text-transform: uppercase;
  font-size: 5vmax;
  font-weight: 100;
  position: absolute;
  top: 55%;
  margin: 0;

  span {
    color: ${getFromTheme('common.accentColor')};
  }
`;

const randomString = slogans[Math.floor(Math.random() * slogans.length)];

class TaglineComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      randomLine: '',
    };

    this.randomizeStringCharacters = this.randomizeStringCharacters.bind(this);
  }

  componentDidMount() {
    this.randomizeStringCharacters(randomString);
  }

  randomizeStringCharacters(string) {
    const stringArray = string.split('');

    const dinamycallyOrderedString = stringArray.map((letter) => {
      const generateRandomLetter = setInterval(() => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1), 50);

      if (generateRandomLetter === letter) {
        clearInterval(generateRandomLetter);
      }

      return generateRandomLetter;
    });

    this.setState({ randomLine: dinamycallyOrderedString.join('') });
  }

  render() {
    const { randomLine } = this.state;

    return (
      <Tagline>
        {'We do web '}
        <span>
          {randomLine}
        </span>
      </Tagline>
    );
  }
}

export default TaglineComponent;
