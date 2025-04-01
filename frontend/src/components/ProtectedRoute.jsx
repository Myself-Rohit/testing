import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../context/authContext";

const ProtectedRoute = () => {
  const { authUser } = useAuthContext();
  return <div>{authUser ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoute;
