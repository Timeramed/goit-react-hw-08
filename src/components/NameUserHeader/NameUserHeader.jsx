import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../HookAuth/HookAuth";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 10px;
  color: #fff;
`;

const StyledWelcome = styled.p`
  margin: 0;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  margin-left: 10px;

  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

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
