import { Navigate } from "react-router-dom";

import useActions from "./useActions";

function Default() {
  const { to } = useActions();

  return <Navigate to={to} />;
}

export default Default;
