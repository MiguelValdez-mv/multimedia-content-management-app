import { useAuth } from "../../hooks/useAuth";
import { isAdminUser } from "../../utils/checkUserRole";

const useActions = () => {
  const { isLoggedIn, user } = useAuth();

  let to;
  if (!isLoggedIn) {
    to = "/login";
  } else if (isAdminUser(user)) {
    to = "/tematicas";
  } else {
    to = "/contenidos";
  }

  return { to };
};

export default useActions;
