import {
  filteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { ListItem, Button, Span, NumberSpan } from "./ContactList.styled";
import { deleteContact } from "../../redux/contacts/operations";
import { Loader } from "../Loader/Loader";

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(filteredContacts);
  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {contacts.map((item) => (
          <ListItem key={item.id}>
            <Span>{item.name}: </Span>
            <NumberSpan>{item.number}</NumberSpan>

            <Button onClick={() => deleteContacts(item.id)}>Delete</Button>
          </ListItem>
        ))}
      </ul>
    </>
  );
}
