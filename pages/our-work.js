import React from 'react';
import styled, { css } from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';
import { UIContainer } from 'modules/grid';
import Router from 'next/router';

// const SectionTitle = styled.h1`
//   color: ${getFromTheme('ourWork.title')};
//   font-size: 24px;
//   margin: 0;
//   margin-bottom: 40px;

//   @media only screen and (min-width: 1200px) {
//     position: fixed;
//     top: 33px;
//     left: 20%;
//     margin: auto;
//   }
// `;

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

const FilterButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: ${getFromTheme('ourWork.filterColor')};
  text-transform: uppercase;
  font-size: 30px;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin-bottom: 40px;
  user-select: none;
  position: relative;
  transition: all .5s cubic-bezier(.785, .135, .15, .86);

  &:after {
    content: '✔';
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    transition: all .5s cubic-bezier(.785, .135, .15, .86);
    opacity: 0;
  }

  &:hover {
    color: ${getFromTheme('common.linkHover')};
  }

  ${props => props.active === true && css`
    color: ${getFromTheme('common.linkHover')};

    &:after {
      opacity: 1;
    }
  `}
`;

const StyledUIContainer = styled(UIContainer)`
  
  @media only screen and (min-width: 1200px) {
    min-height: calc(100vh - 70px);
    padding-top: 120px;
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

  &:after {
    content: '';

    @media only screen and (min-width: 1200px) {
      width: calc(33.33% - 20px);
    }
  }
`;

const Project = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  transition: all .5s cubic-bezier(.785, .135, .15, .86);

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

class ourWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          image: 'https://picsum.photos/id/237/200/300',
          title: 'Project 1',
          type: 'development',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '1',
        },
        {
          image: 'https://picsum.photos/id/238/200/300',
          title: 'Project 2',
          type: 'development',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '2',
        },
        {
          image: 'https://picsum.photos/id/239/200/300',
          title: 'Project 3',
          type: 'design',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '3',
        },
        {
          image: 'https://picsum.photos/id/230/200/300',
          title: 'Project 4',
          type: 'layout',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '4',
        },
        {
          image: 'https://picsum.photos/id/232/200/300',
          title: 'Project 5',
          type: 'design',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '5',
        },
        {
          image: 'https://picsum.photos/id/231/200/300',
          title: 'Project 6',
          type: 'design',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '6',
        },
        {
          image: 'https://picsum.photos/id/230/200/300',
          title: 'Project 7',
          type: 'layout',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '7',
        },
        {
          image: 'https://picsum.photos/id/237/200/300',
          title: 'Project 8',
          type: 'development',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '8',
        },
        {
          image: 'https://picsum.photos/id/238/200/300',
          title: 'Project 9',
          type: 'development',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '9',
        },
        {
          image: 'https://picsum.photos/id/239/200/300',
          title: 'Project 10',
          type: 'design',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '10',
        },
        {
          image: 'https://picsum.photos/id/230/200/300',
          title: 'Project 11',
          type: 'layout',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '11',
        },
        {
          image: 'https://picsum.photos/id/232/200/300',
          title: 'Project 12',
          type: 'design',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '12',
        },
        {
          image: 'https://picsum.photos/id/231/200/300',
          title: 'Project 13',
          type: 'design',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '13',
        },
        {
          image: 'https://picsum.photos/id/230/200/300',
          title: 'Project 14',
          type: 'layout',
          text: 'Lorem Ipsum Sit Dolor Ament Consectetur',
          url: '/project',
          id: '14',
        },
      ],
      filters: [],
    };

    this.getProjectTypes = this.getProjectTypes.bind(this);
    this.routingHandler = this.routingHandler.bind(this);
  }

  getProjectTypes(pro) {
    const projects = pro.map(project => project.type);

    const uniqueProjectTypes = new Set(projects);

    return Array.from(uniqueProjectTypes);
  }

  routingHandler(href, as) {
    const urlDecorator = `/project/${as.replace(/\s+/g, '-').toLowerCase()}`;
    Router.push(href, urlDecorator);
  }

  updateFilters(filter) {
    const { data, filters } = this.state;
    const totalFiltersCount = this.getProjectTypes(data).length;
    const currentFilters = filters;


    if (filter === 'all') {
      this.setState({ filters: [] });

      return;
    }

    if (!currentFilters.includes(filter)) {
      currentFilters.push(filter);
      this.setState({ filters: currentFilters }, () => {
        const finalFiltersCount = filters.length;

        if (totalFiltersCount === finalFiltersCount) {
          this.setState({ filters: [] });
        }
      });
    } else {
      const newFilters = currentFilters.filter(filterValue => filterValue !== filter);
      this.setState({ filters: newFilters });
    }
  }

  generateFilters() {
    const { data, filters } = this.state;
    const projectTypes = this.getProjectTypes(data);
    const filtersStructure = projectTypes.map(type => (
      <FilterButton
        active={filters.includes(type)}
        onClick={() => { this.updateFilters(type); }}
      >
        {type}
      </FilterButton>
    ));

    return (
      <React.Fragment>
        <FilterButton
          active={filters.length === 0}
          onClick={() => { this.updateFilters('all'); }}
        >
          all
        </FilterButton>

        {filtersStructure}
      </React.Fragment>
    );
  }

  generateProjects() {
    const { data, filters } = this.state;

    data.map((project) => {
      if (filters.length === 0 || filters.includes(project.type)) {
        return (
          <Project
            key={project.id}
            category={project.type}
            onClick={() => this.routingHandler(project.url, project.title)}
          >
            <ProjectImage>
              <img
                alt="Project Cover"
                src={project.image}
              />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectTitle>{project.type}</ProjectTitle>
              <ProjectText>{project.text}</ProjectText>
            </ProjectContent>
          </Project>
        );
      }

      return <p>No Projects to show</p>;
    });
  }

  render() {
    return (
      <StyledUIContainer>
        {/* <SectionTitle>OUR WORK</SectionTitle> */}
        <OurWorkContainer>
          <ProjectsContainer>
            {this.generateProjects()}
          </ProjectsContainer>
          <FiltersContainer>
            {this.generateFilters()}
          </FiltersContainer>
        </OurWorkContainer>
      </StyledUIContainer>
    );
  }
}

export default ourWork;
