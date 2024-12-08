import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import LandingPage from "../pages/landing/LandingPage";

// Lazy-loaded components
// const LandingPage = React.lazy(() => import("../pages/landing/LandingPage"));
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = React.lazy(() => import("../pages/auth/RegisterPage"));
const ForgotPasswordPage = React.lazy(
  () => import("../pages/auth/ForgotPasswordPage")
);

const DashboardPage = React.lazy(
  () => import("../pages/dashboard/DashboardPage")
);

const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Router>
      {/* Suspense fallback for lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Unprotected Routes */}
          <Route
            path="/"
            element={
              <PublicRoutes>
                <LandingPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <RegisterPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <RegisterPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoutes>
                <ForgotPasswordPage />
              </PublicRoutes>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashboardPage />
              </ProtectedRoutes>
            }
          />

          {/* Catch-All for Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
