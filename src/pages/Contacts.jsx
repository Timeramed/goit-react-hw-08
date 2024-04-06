import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import ContactFilter from "../components/ContactFilter/ContactFilter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
}
