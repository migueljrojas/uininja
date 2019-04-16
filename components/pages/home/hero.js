import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hero = styled.section`
  background: #f2f2f2;
  padding: 5% 0;
`;
const Button = styled.button`
  background: #999;
  color: #fff;
`;
const Title = styled.h1`
  background: red;
  color: white;
`;

const HeroSection = props => {
  const { name, changeName } = props;
  return (
    <Hero>
      <Title>Hello {name}</Title>
      <Button
        onClick={() => {
          changeName('Miguel');
        }}
        type="button"
      >
        Cambiar Nombre
      </Button>
    </Hero>
  );
};

HeroSection.propTypes = {
  name: PropTypes.string,
  changeName: PropTypes.func
};

export default HeroSection;
