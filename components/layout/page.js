import React from 'react';
import PropTypes from 'prop-types';
import UIHead from './head';
import UIHeader from './header';
import UIFooter from './footer';

class UIPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <UIHead title="UI Ninja - Test Title" />
        <UIHeader />
        <main>{children}</main>
        <UIFooter />
      </div>
    );
  }
}

UIPage.propTypes = {
  children: PropTypes.any
};

export default UIPage;
