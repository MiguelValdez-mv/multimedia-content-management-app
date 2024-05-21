import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { LazyPage } from "./LazyPage";

const Login = LazyPage(lazy(() => import("../pages/Login")));

export function AppRouter() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
