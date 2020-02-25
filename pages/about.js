import styled, { css } from 'styled-components';
import { UIContainer } from 'modules/grid';
import ImageOverlay from 'pageComponents/home/imageOverlay';
import styleModifierByProp from 'utils/styleModifier';
import { getFromTheme } from 'utils/theme-manager';
import Link from 'next/link';
import { useState } from 'react';

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
  padding: 20px 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const ClanList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  padding: 0;
`;
const ClanItem = styled.li`
  margin-bottom: 20px;
  width: 33.33%;
`;

const ClanAvatar = styled.div`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
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

const ClanAvatarName = styled.p`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;


// const QuoteTransition = styled.div``;
// const CtaBlock = styled.div``;
// const ClanSection = styled.section``;
// const CareersSection = styled.section``;
const SubTitle = styled.h2`
  margin: 0 0 20px 0;
  text-transform: uppercase;
`;


const about = () => {
  const [reference, setReference] = useState(0);

  const clickHandler = (ref) => {
    if (ref === reference) {
      setReference(0);
    } else {
      setReference(ref);
    }
  };

  return (
    <UIContainer>
      <ImageOverlay />
      <AboutContainer>
        <Section open={reference === '1'}>
          <Banner
            onClick={() => clickHandler('1')}
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
            onClick={() => clickHandler('2')}
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
            onClick={() => clickHandler('3')}
            open={reference === '3'}
          >
            <BannerTitle>our clan</BannerTitle>
          </Banner>
          <Content active={reference === '3'}>
            <SubTitle>List of ninjas</SubTitle>
            <ClanList>
              <ClanItem>
                <ClanAvatar>
                  <img
                    alt="avatar"
                    src="https://picsum.photos/id/237/200/300"
                  />
                </ClanAvatar>
                <ClanAvatarName>Ninja 1</ClanAvatarName>
              </ClanItem>
              <ClanItem>
                <ClanAvatar>
                  <img
                    alt="avatar"
                    src="https://picsum.photos/id/237/200/300"
                  />
                </ClanAvatar>
                <ClanAvatarName>Ninja 2</ClanAvatarName>
              </ClanItem>
              <ClanItem>
                <ClanAvatar>
                  <img
                    alt="avatar"
                    src="https://picsum.photos/id/237/200/300"
                  />
                </ClanAvatar>
                <ClanAvatarName>Ninja 3</ClanAvatarName>
              </ClanItem>
              <ClanItem>
                <ClanAvatar>
                  <img
                    alt="avatar"
                    src="https://picsum.photos/id/237/200/300"
                  />
                </ClanAvatar>
                <ClanAvatarName>Ninja 4</ClanAvatarName>
              </ClanItem>
              <ClanItem>
                <ClanAvatar>
                  <img
                    alt="avatar"
                    src="https://picsum.photos/id/237/200/300"
                  />
                </ClanAvatar>
                <ClanAvatarName>Ninja 5</ClanAvatarName>
              </ClanItem>
            </ClanList>
          </Content>
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
};

export default about;
