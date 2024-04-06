import { NavLink } from "react-router-dom";
import { useAuth } from "../HookAuth/HookAuth";
import styled from "styled-components";
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

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <StyledNavLink style={{ display: "flex" }} to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </StyledNav>
  );
};
