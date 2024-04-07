import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: #007bff;
  }
`;
