import React from 'react';
import styled from 'styled-components';
import { UIContainer } from 'modules/grid';
// import styleModifierByProp from 'utils/styleModifier';
// import { getFromTheme } from 'utils/theme-manager';
// import Button from 'modules/buttons';

const StyledUIContainer = styled(UIContainer)`
  padding-top: 120px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

class NewProject extends React.Component {
  static async getInitialProps() {
    const pageName = await 'new-project';
    return { pageName };
  }

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <StyledUIContainer>
        <form>
          <h2>Comencemos un nuevo proyecto</h2>
        </form>
      </StyledUIContainer>
    );
  }
}

export default NewProject;
