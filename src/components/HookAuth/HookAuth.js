import { useSelector } from "react-redux";
import {
  selectUser,
  selectLoggedIn,
  selectIsRefreshingContacts,
} from "../../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshingContacts = useSelector(selectIsRefreshingContacts);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshingContacts,
    user,
  };
};
