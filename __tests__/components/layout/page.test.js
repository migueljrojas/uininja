/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import UIPage from '../../../components/layout/page';

describe('GIVEN the index page', () => {
  describe('WHEN the page is rendered', () => {
    it('THEN it should have a ThemeProvider component', () => {
      const PageLayout = shallow(<UIPage />);

      expect(PageLayout.find(ThemeProvider).length).toEqual(1);
    });
  });
});
