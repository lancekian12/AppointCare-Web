import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";

interface NoNavLayoutProps {
  children?: ReactNode;
}

const NoNavLayout: React.FC<NoNavLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default NoNavLayout;
