import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../HookAuth/HookAuth";
import {
  StyledHeader,
  StyledWelcome,
  StyledButton,
} from "./NameUserHeader.styled";

export const NameUserHeader = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledHeader>
      <StyledWelcome>Welcome, {user.name}</StyledWelcome>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </StyledHeader>
  );
};
