import { useNavigate } from "react-router-dom";

const useActions = () => {
  const navigate = useNavigate();

  const signUp = () => {};
  const goToLoginPage = () => navigate("/login");

  return {
    signUp,
    goToLoginPage,
  };
};

export default useActions;
