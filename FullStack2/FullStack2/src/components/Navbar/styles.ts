import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const Header = styled.header`
  height: 15vh;
  width: 100vw;
  background-color: ${ colors.primary };
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const Logo = styled.img`
  width: 168px;
  height: 80px;
`;

export const NavbarContent = styled.nav`
  width: 32rem;
  height: 100%;
  padding: 0 .5rem;
`;

export const NavbarList = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarItem = styled.li`
  color: ${ colors.white };
  font-size: 1.2rem;
  font-weight: 600;
  list-style: none;
`;