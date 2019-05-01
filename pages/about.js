import React from 'react';
import styled from 'styled-components';
import ImageOverlay from 'pageComponents/home/imageOverlay';

const Title = styled.h1`
  margin: 0 0 20px;
`;

const HeroSection = styled.section`

`;

const QuoteTransition = styled.div``;
const CtaBlock = styled.div``;
const MethodologySection = styled.section``;
const ClanSection = styled.section``;
const CareersSection = styled.section``;
const SubTitle = styled.h2`
  margin: 0 0 20px;
`;

export default () => (
  <React.Fragment>
    <ImageOverlay />
    <HeroSection>
      <Title>About Us</Title>
      <p>We are a clan of digital enthusiasts, </p>
      <p>Powerful graphics</p>
    </HeroSection>
    <QuoteTransition />
    <MethodologySection>
      <SubTitle>How We work</SubTitle>
      <p>Describe methodology</p>
      <p>Powerful graphics</p>
    </MethodologySection>
    <CtaBlock />
    <ClanSection>
      <SubTitle>Our clan</SubTitle>
      <p>List of ninjas</p>
      <ul>
        <li>Ninja 1</li>
        <li>Ninja 2</li>
        <li>Ninja 3</li>
      </ul>
    </ClanSection>
    <CareersSection>
      <p>Join the clan</p>
    </CareersSection>
  </React.Fragment>
);
