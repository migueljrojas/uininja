import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';
import { UIContainer } from 'modules/grid';
import { useRouter } from 'next/router';

const SectionTitle = styled.h1`
  color: ${getFromTheme('ourWork.title')};
  font-size: 24px;
  margin: 0;
  margin-bottom: 40px;
  
  @media only screen and (min-width: 1200px) {
    position: fixed;
    top: 33px;
    left: 20%;
    margin: auto;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  order: 1;
  margin-bottom: 50px;
  
  @media only screen and (min-width: 1200px) {
    width: 25%;
    order: 2;
    margin-bottom: 0;
  }
`;

const Filter = styled.button`
  background: none;
  border: none;
  color: red;
  text-transform: uppercase;
  font-size: 30px;
  cursor: pointer;
  outline: none;
  padding: 0;
  
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  &:hover {
    color: black; 
  }
`;

const StyledUIContainer = styled(UIContainer)`
  
  @media only screen and (min-width: 1200px) {
    min-height: calc(100vh - 70px);
    padding-top: 50px;
  }
`;

const OurWorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1200px) {
    height: calc(100vh - 120px);
    overflow: hidden;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const ProjectsContainer = styled.div`
  order: 2;

  @media only screen and (min-width: 1200px) {
    order: 1;
    padding-right: 30px;
    height: calc(100% - 30px);
    overflow-y: auto;
    overflow-x: hidden;
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
  }

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: gray;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 50px;
  }
`;

const Project = styled.div`
  cursor: pointer;
  margin-bottom: 30px;

  @media only screen and (min-width: 1200px) {
    width: calc(33.33% - 20px);
  }
`;

const ProjectImage = styled.div`
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100%;
    height: auto;
  }
`;

const ProjectContent = styled.div`
  background: white;
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`;
const ProjectText = styled.p`
  margin: 0;
`;

const ourWork = () => {
  const data = [
    {
      image: 'https://picsum.photos/id/237/200/300',
      title: 'Project 1',
      text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
      url: '/',
      id: '1',
    },
    {
      image: 'https://picsum.photos/id/238/200/300',
      title: 'Project 2',
      text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
      url: '/',
      id: '2',
    },
    {
      image: 'https://picsum.photos/id/239/200/300',
      title: 'Project 3',
      text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
      url: '/',
      id: '3',
    },
    {
      image: 'https://picsum.photos/id/230/200/300',
      title: 'Project 4',
      text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
      url: '/',
      id: '4',
    },
    {
      image: 'https://picsum.photos/id/232/200/300',
      title: 'Project 5',
      text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
      url: '/',
      id: '5',
    },
    {
      image: 'https://picsum.photos/id/231/200/300',
      title: 'Project 6',
      text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
      url: '/',
      id: '6',
    },
  ];

  const router = useRouter();

  const routingHandler = (href) => {
    router.push(href);
  };

  return (
    <StyledUIContainer>
      <SectionTitle>OUR WORK</SectionTitle>
      <OurWorkContainer>
        <ProjectsContainer>
          {data.map(project => (
            <Project
              key={project.id}
              onClick={() => routingHandler(project.url)}
            >
              <ProjectImage>
                <img
                  alt="Project Cover"
                  src={project.image}
                />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectText>{project.text}</ProjectText>
              </ProjectContent>
            </Project>
          ))}
        </ProjectsContainer>
        <FiltersContainer>
          <Filter type="button">all proyects</Filter>
          <Filter type="button">development</Filter>
          <Filter type="button">design</Filter>
          <Filter type="button">layouts</Filter>
        </FiltersContainer>
      </OurWorkContainer>
    </StyledUIContainer>
  );
};

export default ourWork;
