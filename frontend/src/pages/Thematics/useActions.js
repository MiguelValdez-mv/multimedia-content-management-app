import { useAuth } from "../../hooks/auth/useAuth";
import { useGetThematics } from "../../hooks/thematics/useGetThematics";
import { isAdminUser } from "../../utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();

  const { isLoading, data } = useGetThematics();

  return {
    isLoading,
    allowThematicCreation: isAdminUser(user),
    thematics: data?.data,
  };
};

export default useActions;
