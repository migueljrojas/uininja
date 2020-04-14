import React from 'react';
import styled, { css } from 'styled-components';
import { UIContainer } from 'modules/grid';
import ImageOverlay from 'pageComponents/home/imageOverlay';
import styleModifierByProp from 'utils/styleModifier';
import { getFromTheme } from 'utils/theme-manager';
import Link from 'next/link';

const Title = styled.h1`
  margin: 0 0 20px;
`;

const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  overflow: hidden;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  height: 90%;
  width: 100px;
  position: relative;
  transition: all .5s cubic-bezier(.785, .135, .15, .86);

  ${styleModifierByProp({ prop: 'open', value: true }, `
    width: 100%;
    transition: all .5s cubic-bezier(.785, .135, .15, .86);
  `)};
`;

const Banner = styled.div`
  height: 100%;
  min-width: 100px;
  max-width: 100px;
  background: ${getFromTheme('about.bannerColor')};;
  cursor: pointer;
  transition: all .5s cubic-bezier(.785, .135, .15, .86);
  position: relative;

  &:not(:last-child) {
    /* border-right: 1px solid white; */
  }

  &:hover {
    transform: scale3d(1, 1.05, 1)
  }

  ${props => props.open === true && css`
    background: ${getFromTheme('about.bannerColorActive')};

    &:hover {
      transform: scale3d(1, 1, 1);
    }
  `};

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const BannerTitle = styled.h2`
  transform-origin: 0 0;
  color: #fff;
  transform: rotate(-90deg);
  height: 100px;
  white-space: nowrap;
  margin: 0;
  position:  absolute;
  bottom: -70px;
  left: calc(100% - 100px);
  line-height: 130px;
  font-size: 30px;
  text-transform: uppercase;
  z-index: 1;
  user-select: none;
`;

const Content = styled.div`
  padding: 20px 40px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all .5s cubic-bezier(.785, .135, .15, .86);
  opacity: 0;
  width: 100%;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: gray;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${getFromTheme('about.bannerColorActive')};
    border-radius: 50px;
  }

  ${styleModifierByProp({ prop: 'active', value: true }, `
    overflow-y: auto;
    opacity: 1;
  `)}
`;

const StyledContent = styled(Content)`
  padding: 20px 60px;
`;

const Slider = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 85%;
  opacity: 0;
  bottom: 0;
  transition: ${getFromTheme('transition')};

  ${props => props.active && css`
    opacity: 1;
  `}
`;

const ClanAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  border-left: 2px solid gray;
  border-bottom: 2px solid gray;
  width: 20px;
  height:  20px;
  cursor: pointer;
`;

const ArrowPrev = styled(Arrow)`
  transform: translateY(-50%) rotate(45deg);
  left: -45px;
  transform-origin: center;
`;

const ArrowNext = styled(Arrow)`
  right: -45px;
  transform: translateY(-50%) rotate(-135deg);
`;

const ClanAvatarName = styled.p`
  margin: 0;
  text-transform: uppercase;
`;

const SubTitle = styled.h2`
  margin: 0 0 20px 0;
  text-transform: uppercase;
`;


class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reference: 0,
      activeSlide: 0,
      ninjas: [
        {
          name: 'Cesar Alarcon',
          avatar: 'https://picsum.photos/id/237/200/300',
        },
        {
          name: 'Miguel Rojas',
          avatar: 'https://picsum.photos/id/237/200/300',
        },
        {
          name: 'Pedro Perez',
          avatar: 'https://picsum.photos/id/237/200/300',
        },
        {
          name: 'Yonaikel Jesus',
          avatar: 'https://picsum.photos/id/237/200/300',
        },
        {
          name: 'Wachingtong Armando',
          avatar: 'https://picsum.photos/id/237/200/300',
        },
      ],
    };
  }

  clickHandler = (ref) => {
    const { reference } = this.state;
    if (ref === reference) {
      this.setState({ reference: 0 });
    } else {
      this.setState({ reference: ref });
    }
  };

  updateActiveSlide = (event) => {
    const { activeSlide, ninjas } = this.state;

    if (event === 'prev' && activeSlide > 0) {
      this.setState({ activeSlide: activeSlide - 1 });
    }

    if (event === 'next' && activeSlide < ninjas.length - 1) {
      this.setState({ activeSlide: activeSlide + 1 });
    }
  }

  sliderStructure() {
    const { ninjas, activeSlide } = this.state;

    const ninjasSlides = ninjas.map((ninja, index) => (
      <Slide
        key={index}
        active={activeSlide === index}
      >
        <ClanAvatar>
          <img
            alt="avatar"
            src={ninja.avatar}
          />
        </ClanAvatar>
        <ClanAvatarName>{ninja.name}</ClanAvatarName>
      </Slide>
    ));

    return ninjasSlides;
  }

  render() {
    const { reference } = this.state;

    return (
      <UIContainer>
        <ImageOverlay />
        <AboutContainer>
          <Section open={reference === '1'}>
            <Banner
              onClick={() => this.clickHandler('1')}
              open={reference === '1'}
            >
              <BannerTitle>our history</BannerTitle>
            </Banner>
            <Content active={reference === '1'}>
              <Title>About Us</Title>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
              <p>We are a clan of digital enthusiasts, </p>
              <p>Powerful graphics</p>
            </Content>
          </Section>
          <Section open={reference === '2'}>
            <Banner
              onClick={() => this.clickHandler('2')}
              open={reference === '2'}
            >
              <BannerTitle>works</BannerTitle>
            </Banner>
            <Content active={reference === '2'}>
              <SubTitle>How We work</SubTitle>
              <p>Describe methodology</p>
              <p>Powerful graphics</p>
            </Content>
          </Section>
          <Section open={reference === '3'}>
            <Banner
              onClick={() => this.clickHandler('3')}
              open={reference === '3'}
            >
              <BannerTitle>our clan</BannerTitle>
            </Banner>
            <StyledContent active={reference === '3'}>
              <Slider>
                <SubTitle>List of ninjas</SubTitle>
                <ArrowPrev onClick={() => { this.updateActiveSlide('prev'); }} />
                <ArrowNext onClick={() => { this.updateActiveSlide('next'); }} />
                {this.sliderStructure()}
              </Slider>
            </StyledContent>
          </Section>
          <Section>
            <Banner>
              <Link
                as="/carrers"
                href="/carrers"
              >
                <a>
                  <BannerTitle>Join the clan</BannerTitle>
                </a>
              </Link>
            </Banner>
          </Section>
        </AboutContainer>
      </UIContainer>
    );
  }
}

export default About;
