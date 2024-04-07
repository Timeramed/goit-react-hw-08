import { useAuth } from "../HookAuth/HookAuth";
import { StyledNav, StyledNavLink } from "./Navigation.styled";

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
