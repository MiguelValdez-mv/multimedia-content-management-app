import { useAuth } from "../../hooks/auth/useAuth";
import { isAdminUser } from "../../utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();

  return {
    allowThematicCreation: isAdminUser(user),
  };
};

export default useActions;
