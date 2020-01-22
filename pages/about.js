import React from 'react';
import styled from 'styled-components';
import { UIContainer } from 'modules/grid';
// import ImageOverlay from 'pageComponents/home/imageOverlay';

const Title = styled.h1`
  margin: 0 0 20px;
`;

const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const HeroSection = styled.section`
  display: flex;
  height: 100%;
  width: auto;
`;

const HeroBanner = styled.div`
  height: 100%;
  width: 100px;
  background: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const MethodologyBanner = styled.div`
  height: 100%;
  width: 100px;
  background: black;
  position: absolute;
  top: 0;
  left: 100px;
`;

const BannerTitle = styled.h2`
  /* display: block; */
  transform-origin: 0 0;
  /* text-orientation: upright; */
  /* writing-mode: bt-lr; */
  color: #fff;
  transform: rotate(-90deg);
  height: 95px;
  white-space: nowrap;
  margin: 0;
  position:  absolute;
  bottom: -70px;
  left: calc(100% - 100px);
  line-height: 130px;
  font-size: 50px;
  z-index: 1;
  /* width: 100%;
  height: 100%; */
`;

const HeroContent = styled.div`
  height: 100%;
  width: 0;
  overflow: hidden;
`;


const QuoteTransition = styled.div``;
const CtaBlock = styled.div``;
const MethodologySection = styled.section``;
const ClanSection = styled.section``;
const CareersSection = styled.section``;
const SubTitle = styled.h2`
  margin: 0 0 20px;
`;

const about = () => (
  <UIContainer>
    {/* <ImageOverlay /> */}
    <AboutContainer>
      <HeroSection>
        <HeroBanner>
          <BannerTitle>our history</BannerTitle>
        </HeroBanner>
        <HeroContent>
          <Title>About Us</Title>
          <p>We are a clan of digital enthusiasts, </p>
          <p>Powerful graphics</p>
        </HeroContent>
      </HeroSection>
      <QuoteTransition />
      <MethodologySection>
        <MethodologyBanner>
          <BannerTitle>da´ team</BannerTitle>
        </MethodologyBanner>
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
    </AboutContainer>
  </UIContainer>
);

export default about;
