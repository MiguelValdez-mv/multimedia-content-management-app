import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";
import { useAlert } from "../../hooks/useAlert";
import { COPY } from "../../copy";

const useActions = () => {
  const navigate = useNavigate();

  const alert = useAlert();

  const loginMutation = useLogin();

  const signIn = (values) => {
    loginMutation.mutate(values, {
      onSuccess: (res) => {
        navigate("/");
        alert.success(COPY["login.success"](res.data.user.username));
      },
      onError: (err) => alert.error(err.message),
    });
  };
  const goToSignUpPage = () => navigate("/registro");

  return {
    signIn,
    goToSignUpPage,
    isLoading: loginMutation.isLoading,
  };
};

export default useActions;
