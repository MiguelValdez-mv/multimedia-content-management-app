import { useAuth } from "../../hooks/auth/useAuth";

const useActions = () => {
  const { isLoggedIn } = useAuth();

  const to = isLoggedIn ? "/tematicas" : "/login";

  return { to };
};

export default useActions;
