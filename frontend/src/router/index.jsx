import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { USER_ROLES } from "../constants";
import { LazyPage } from "./LazyPage";
import { RequireAuth } from "./RequireAuth";

const Default = LazyPage(lazy(() => import("../pages/Default")));
const Login = LazyPage(lazy(() => import("../pages/Login")));
const SignUp = LazyPage(lazy(() => import("../pages/SignUp")));
const Thematics = LazyPage(lazy(() => import("../pages/Thematics")));

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Default />} />

      <Route path="login" element={<Login />} />

      <Route path="registro" element={<SignUp />} />

      <Route
        path="tematicas"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <Thematics />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
