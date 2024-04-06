import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import styled from "styled-components";

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

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("login success");
      })
      .catch(() => {
        toast.error("login error");
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledLabel>
            Email
            <Field type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Password
            <Field type="password" name="password" />
          </StyledLabel>
          <StyledButton type="submit" disabled={isSubmitting}>
            Log In
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
