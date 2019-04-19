import Link from 'next/link';
import styled from 'styled-components';

const StyledMenu = styled.ul`
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
`;

const Menu = () => (
  <StyledMenu>
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
  </StyledMenu>
);

export default Menu;
