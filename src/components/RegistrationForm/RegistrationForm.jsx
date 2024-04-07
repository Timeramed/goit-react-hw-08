import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledButton,
} from "./RegistarationForm.styled";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch((error) => {
        toast.error("Registration error!", error.message);
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
