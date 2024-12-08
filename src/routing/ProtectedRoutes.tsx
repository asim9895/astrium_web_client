/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAppSelector } from "@/hooks";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { AppSidebarInset } from "@/components/sidebar/AppSidebarInset";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [defaultOpen, setDefaultOpen] = React.useState(true);
  const [sidebarWidth, setSidebarWidth] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    const getSidebarState = async () => {
      const sidebarState = localStorage.getItem("sidebar:state");
      const storedSidebarWidth = localStorage.getItem("sidebar:width");

      if (sidebarState) {
        setDefaultOpen(sidebarState === "true");
      }
      if (storedSidebarWidth) {
        setSidebarWidth(storedSidebarWidth);
      }
    };

    getSidebarState();
  }, []);

  const authenticated = useAppSelector((state) => state.user.authenticated);

  return authenticated ? (
    <SidebarProvider defaultOpen={defaultOpen} defaultWidth={sidebarWidth}>
      <AppSidebar>
        <AppSidebarInset>{children}</AppSidebarInset>
      </AppSidebar>
    </SidebarProvider>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
