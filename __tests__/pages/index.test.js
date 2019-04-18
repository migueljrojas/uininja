/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import Home from 'pages/index';
import UIPage from 'layoutComponents/page';
import AboutUsSection from 'pageComponents/home/about';
import HeroSection from 'pageComponents/home/hero';

describe('GIVEN the index page', () => {
  describe('WHEN the page is rendered', () => {
    let home;

    beforeEach(() => {
      home = shallow(<Home />);
    });

    it('THEN it should have a UIPage component', () => {
      expect(home.find(UIPage).length).toEqual(1);
    });

    it('THEN it should have a Hero section component', () => {
      expect(home.find(HeroSection).length).toEqual(1);
    });

    it('THEN it should have an AboutUs section component', () => {
      expect(home.find(AboutUsSection).length).toEqual(1);
    });
  });

  describe('WHEN its changeName function its called with "John" value', () => {
    xit('THEN the state.name should be updated', () => {});
  });
});
