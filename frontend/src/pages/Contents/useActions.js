import { useGetContents } from "../../hooks/contents/useGetContents";
import { useAuth } from "../../hooks/auth/useAuth";
import { isReaderUser } from "../../utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();

  const queryToGetContents = useGetContents();

  return {
    isLoading: queryToGetContents.isLoading,
    contents: queryToGetContents.data?.data,
    allowContentCreation: !isReaderUser(user),
  };
};

export default useActions;
