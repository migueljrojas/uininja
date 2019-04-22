import UIPage from 'layoutComponents/page';
import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';
import { UIContainer } from 'modules/grid';

const SectionTitle = styled.h1`
  color: ${getFromTheme('ourWork.title')};
  position: absolute;
  top: 15px;
  left: 18%;
  font-size: 24px;
`;

const FilterWrapper = styled.div`

`;

const ourWork = props => {
  return (
    <UIPage>
      <UIContainer>
        <SectionTitle>OUR WORK</SectionTitle>
        <div>
          <div>
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
            proyect wrapper
          </div>
          <div>
            <button>all proyects</button>
            <button>development</button>
            <button>design</button>
            <button>layouts</button>
          </div>
        </div>
      </UIContainer>
    </UIPage>
  )
}

export default ourWork;