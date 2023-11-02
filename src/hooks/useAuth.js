import { useSelector } from "react-redux";

import {
  selectUser,
  selectIsAuthError,
  selectToken,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isAuthError = useSelector(selectIsAuthError);
  const token = useSelector(selectToken);

  return {
    isAuthError,
    token,
    user,
  };
};
