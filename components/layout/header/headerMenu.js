import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: flex-start;

  @media only screen and (min-width: 1200px) {
  }
`;

const MenuItem = styled.li`
  position: relative;

  /* &:hover {
    a {
      &:after {
        width: 100%;
      }
    }
  } */

  &.-active {
    a {
      &:after {
        width: 100%;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: 20px;

    @media only screen and (min-width: 1200px) {
      margin-bottom: 40px;
    }

  }

  a {
    color: ${getFromTheme('common.link')};
    transition: ${getFromTheme('transition')};
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.7px;
    display: inline-block;
    position: relative;

    &::after {
      content:  '';
      position: absolute;
      bottom: -10px;
      height: 2px;
      background: #E65443;
      width: 0;
      left: 0;
      z-index: 1000;
      transition: ${getFromTheme('transition')};
    }

    @media only screen and (min-width: 1200px) {
      font-size: 40px;
    }

    &:hover {
      color: ${getFromTheme('common.linkHover')};
    }
  }
`;

const MenuComponent = ({ closeNav, path }) => (
  <Menu>
    <MenuItem
      className={path === '/about' ? '-active' : ''}
      onClick={() => { closeNav(false); }}
    >
      <Link
        as="/about"
        href="/about"
      >
        <a>Who we are</a>
      </Link>
    </MenuItem>
    <MenuItem
      className={path === '/our-work' ? '-active' : ''}
      onClick={() => { closeNav(false); }}
    >
      <Link
        as="/our-work"
        href="/our-work"
      >
        <a>Our Work</a>
      </Link>
    </MenuItem>
    <MenuItem
      className={path === '/carrers' ? '-active' : ''}
      onClick={() => { closeNav(false); }}
    >
      <Link
        as="/carrers"
        href="/carrers"
      >
        <a>Carrers</a>
      </Link>
    </MenuItem>
    <MenuItem
      className={path === '/contact' ? '-active' : ''}
      onClick={() => { closeNav(false); }}
    >
      <Link
        as="/contact"
        href="/contact"
      >
        <a>Contact Us</a>
      </Link>
    </MenuItem>
  </Menu>
);

MenuComponent.propTypes = {
  closeNav: PropTypes.any,
  path: PropTypes.string,
};

export default MenuComponent;
