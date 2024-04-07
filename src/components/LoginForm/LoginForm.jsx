import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Field } from "formik";
import toast from "react-hot-toast";
import { StyledForm, StyledLabel, StyledButton } from "./LoginForm.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("login success");
      })
      .catch(() => {
        toast.error("login error!");
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
