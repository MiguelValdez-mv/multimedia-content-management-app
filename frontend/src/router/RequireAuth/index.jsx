import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth/useAuth";

export function RequireAuth({ allowedRoles = [], children }) {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const isValidRole = !allowedRoles.length || allowedRoles.includes(user.role);
  if (!isValidRole) {
    return <Navigate to="/404" />;
  }

  return children;
}
