import { useNavigate } from "react-router-dom";

import { useSignUp } from "../../hooks/useSignUp";
import { useAlert } from "../../hooks/useAlert";
import { COPY } from "../../copy";

const useActions = () => {
  const navigate = useNavigate();

  const alert = useAlert();

  const signUpMutation = useSignUp();

  const signUp = (values) => {
    signUpMutation.mutate(values, {
      onSuccess: () => {
        alert.success(COPY["signUp.success"]);
        navigate("/login");
      },
      onError: (err) => alert.error(err.message),
    });
  };
  const goToLoginPage = () => navigate("/login");

  return {
    signUp,
    goToLoginPage,
    isLoading: signUpMutation.isLoading,
  };
};

export default useActions;
