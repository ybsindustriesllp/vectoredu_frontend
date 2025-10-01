import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? children : <Navigate to="/login" replace />;
}
