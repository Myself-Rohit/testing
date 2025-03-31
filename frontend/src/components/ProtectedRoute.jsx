import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const user = useSelector((store) => store.user);

  return <div>{user ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoute;
