import Link from 'next/link';
import styled from 'styled-components';
import { getFromTheme } from 'utils/theme-manager';

const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  margin-right: 20px;
`;

const MenuItem = styled.li`
  &:not(first-child) {
    margin-left: 20px;
  }

  a {
    color: ${getFromTheme('common.link')};
    transition: ${getFromTheme('transition')};
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.7px;

    &:hover {
      color: ${getFromTheme('common.linkHover')};
    }
  }
`;

const MenuComponent = () => (
  <Menu>
    <MenuItem>
      <Link
        as="/who-we-are"
        href="/about"
      >
        <a>Who we are</a>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link
        as="/contact-us"
        href="/contact"
      >
        <a>Contact Us</a>
      </Link>
    </MenuItem>
  </Menu>
);

export default MenuComponent;
