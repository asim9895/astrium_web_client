import { useAppSelector } from "@/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authenticated = useAppSelector((state) => state.user.authenticated);

  return !authenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
