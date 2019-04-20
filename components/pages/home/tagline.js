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

class TaglineComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      randomLine: [],
      currentSloganIndex: 0,
    };

    this.randomizeStringCharacters = this.randomizeStringCharacters.bind(this);
  }

  componentDidMount() {
    const { currentSloganIndex } = this.state;
    const currentSlogan = slogans[currentSloganIndex];
    this.randomizeStringCharacters(currentSlogan);
  }

  componentDidUpdate() {
    const { randomLine, currentSloganIndex } = this.state;

    if (slogans[currentSloganIndex] === randomLine.join('')) {
      setTimeout(() => {
        const newSloganIndex = currentSloganIndex < 2 ? currentSloganIndex + 1 : 0;
        const newSlogan = slogans[newSloganIndex];

        this.randomizeStringCharacters(newSlogan);
      }, 2000);
    }
  }

  // randomSlogan = () => slogans[Math.floor(Math.random() * slogans.length)];

  generateRandomLetter = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);

  randomizeStringCharacters(string) {
    const stringArray = string.split('');
    const newString = [];
    const { currentSloganIndex } = this.state;

    if (slogans[currentSloganIndex] !== string) {
      const newSloganIndex = currentSloganIndex < 2 ? currentSloganIndex + 1 : 0;
      this.setState({ currentSloganIndex: newSloganIndex });
    }

    stringArray.forEach((letter, index) => {
      const randomizeLetters = setInterval(() => {
        const newLetter = this.generateRandomLetter();

        if (letter !== newLetter) {
          newString[index] = newLetter;
        } else {
          newString[index] = letter;
          clearInterval(randomizeLetters);
        }

        this.setState({ randomLine: newString });
      }, 50);
    });
  }

  render() {
    const { randomLine } = this.state;

    return (
      <Tagline>
        {'We do web '}
        <span>
          {randomLine.join('')}
        </span>
      </Tagline>
    );
  }
}

export default TaglineComponent;
