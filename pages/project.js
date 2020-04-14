import React from 'react';
import styled from 'styled-components';
// import styled, { css } from 'styled-components';
import { UIContainer } from 'modules/grid';
// import styleModifierByProp from 'utils/styleModifier';
import { getFromTheme } from 'utils/theme-manager';
import Button from 'modules/buttons';

const StyledUIContainer = styled(UIContainer)`
  padding: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Hero = styled.section`
  padding-top: 70px;
  padding-left: 7.5%;
  padding-right: 7.5%;
  height: 65%;
  background: ${getFromTheme('project.heroBackground')};
  display: flex;
  justify-content: space-between;
`;

const HeroContent = styled.div`
  margin-top: 10%;

`;

const HeroImage = styled.div`
  width: 50%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 0;
  margin-top: 20%;
  padding-bottom: 60%;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100%;
    height: auto;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: space-between;

  &:after {
    content: '';
    order: 1;
  }
`;

const StyledButton = styled(Button)`
  &:first-of-type {
    order: 0;
  }

  &:last-of-type {
    order: 2;
  }
`;


class about extends React.Component {
  static async getInitialProps() {
    const pageName = await 'project';
    return { pageName };
  }

  constructor(props) {
    super(props);

    this.state = {
      project: {
        image: 'https://picsum.photos/id/237/1000/1100',
        title: 'Project 1',
        type: 'development',
        text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
        url: '/',
        id: '1',
        demo: '/',
      },
    };
  }

  render() {
    const { project } = this.state;

    return (
      <StyledUIContainer>
        <Hero>
          <HeroContent>
            <h3>{project.type}</h3>
            <h2>{project.title}</h2>
            <p>{project.text}</p>
          </HeroContent>
          <HeroImage>
            <ImageContainer>
              <img
                alt="project"
                src={project.image}
              />
            </ImageContainer>
            <HeroButtons>
              {project.title && (
              <StyledButton
                buttonType="outline"
                href={project.demo}
                size="md"
              >
                View Demo
              </StyledButton>
              )}
              <StyledButton
                href="/project"
                size="md"
              >
                {'Let\'s start a project!'}
              </StyledButton>
            </HeroButtons>
          </HeroImage>
        </Hero>
      </StyledUIContainer>
    );
  }
}

export default about;
