/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import Home from '../../pages/index';
import UIPage from '../../components/layout/page';

describe('GIVEN the index page', () => {
  describe('WHEN the page is rendered', () => {
    it('THEN it should have a UIPage component', () => {
      const home = shallow(<Home />);

      expect(home.find(UIPage).length).toEqual(1);
    });
  });
});
