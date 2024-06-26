import { Form, Label, Input } from "./ContactFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Form>
      <Label>Filter contacts by name: </Label>
      <Input
        type="text"
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </Form>
  );
}
