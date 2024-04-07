import styled from "styled-components";
export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 10px;
  color: #fff;
`;

export const StyledWelcome = styled.p`
  margin: 0;
`;

export const StyledButton = styled.button`
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
