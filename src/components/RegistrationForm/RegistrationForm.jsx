import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import styled from "styled-components";

const StyledInput = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration successful");
      })
      .catch((error) => {
        toast.error("Registration error:", error);
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledLabel>
            Username
            <StyledInput type="text" name="name" />
          </StyledLabel>
          <StyledLabel>
            Email
            <StyledInput type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledInput type="password" name="password" />
          </StyledLabel>
          <StyledButton type="submit" disabled={isSubmitting}>
            Register
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
