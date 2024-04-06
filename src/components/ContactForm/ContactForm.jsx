import {
  Container,
  Text,
  Input,
  Button,
  ErrorText,
} from "./ContactForm.styled";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  number: "",
};

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z\s]+$/, "Invalid name format")
    .max(30, "Name must be at most 30 characters")
    .required("This field is required"),
  number: yup
    .string()
    .trim()
    .matches(
      /^[^a-zA-Z]*\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}[^a-zA-Z]*$/,
      "Invalid phone number format"
    )
    .max(15, "Phone number must be at most 15 characters")
    .required("This field is required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value, action) => {
        value = { name: value.name, number: value.number };
        dispatch(addContact(value));
        toast.success("Contact add Success!");
        action.resetForm();
      }}
      validationSchema={schema}
    >
      {(formikProps) => (
        <Container>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            value={formikProps.values.name}
          />
          <ErrorMessage name="name">
            {() => (
              <ErrorText>
                Wrong name: Name may contain only letters, apostrophe, dash, and
                spaces, and must be at most 15 characters.
              </ErrorText>
            )}
          </ErrorMessage>
          <Text>Number</Text>
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            value={formikProps.values.number}
          />
          <ErrorMessage name="number">
            {() => (
              <ErrorText>
                Phone number must be digits and can contain spaces, dashes,
                parentheses, and can start with +, and must be at most 12
                characters.
              </ErrorText>
            )}
          </ErrorMessage>
          <Button type="submit">Add contact</Button>
        </Container>
      )}
    </Formik>
  );
}
