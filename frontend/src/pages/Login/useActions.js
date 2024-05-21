import { useNavigate } from "react-router-dom";

const useActions = () => {
  const navigate = useNavigate();

  const signIn = () => {};
  const goToSignUpPage = () => navigate("/registro");

  return {
    signIn,
    goToSignUpPage,
  };
};

export default useActions;
