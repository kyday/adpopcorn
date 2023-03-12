import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = (props: NavbarProps) => {
  return (
    <Wrapper>
      <Nav>
        <MenuWrapper>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
        </MenuWrapper>
      </Nav>
      {props.children}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  height: 100vh;

  padding: 3.25rem;

  position: fixed;
  bottom: 0;
`;

const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 0;
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
