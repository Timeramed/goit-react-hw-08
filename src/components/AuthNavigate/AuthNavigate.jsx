import { StyledDiv, StyledNavLink } from "./AuthNavigate.styled";

export const AuthNavigate = () => {
  return (
    <StyledDiv>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </StyledDiv>
  );
};
