import { useNavigate } from "react-router-dom";

import { useCreateThematic } from "../../../hooks/thematics/useCreateThematic";
import { useAlert } from "../../../hooks/useAlert";
import { COPY } from "../../../copy";

const useActions = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useCreateThematic();

  const alert = useAlert();

  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    mutate(formData, {
      onSuccess: () => {
        navigate("/tematicas");
        alert.success(COPY["createThematic.success"]);
      },
      onError: (err) => alert.error(err.message),
    });
  };

  return { handleSubmit, isLoading };
};

export default useActions;
