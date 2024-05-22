import { useAuth } from "../../hooks/auth/useAuth";
import { useGetThematics } from "../../hooks/thematics/useGetThematics";
import { useDeleteThematicById } from "../../hooks/thematics/useDeleteThematicById";
import { useAlert } from "../../hooks/useAlert";
import { isAdminUser } from "../../utils/checkUserRole";
import { COPY } from "../../copy";

const useActions = () => {
  const { user } = useAuth();

  const alert = useAlert();

  const queryToGetThematics = useGetThematics();
  const deleteThematicMutation = useDeleteThematicById();

  const deleteThematic = (id) => {
    deleteThematicMutation.mutate(id, {
      onSuccess: () => alert.success(COPY["thematics.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading:
      queryToGetThematics.isLoading || deleteThematicMutation.isLoading,
    allowThematicCreation: isAdminUser(user),
    thematics: queryToGetThematics.data?.data,
    deleteThematic,
  };
};

export default useActions;
