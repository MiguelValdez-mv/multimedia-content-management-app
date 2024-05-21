import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { LazyPage } from "./LazyPage";

const Login = LazyPage(lazy(() => import("../pages/Login")));
const SignUp = LazyPage(lazy(() => import("../pages/SignUp")));

export function AppRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="registro" element={<SignUp />} />
    </Routes>
  );
}
