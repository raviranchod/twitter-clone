import { useState } from "react";
import { Sidebar } from "../features/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-full flex">
      <Sidebar className="relative xl:fixed overflow-y-auto right-56 xl:right-auto" />
      <main className="w-full bg-primary-lightest ml-16 lg:ml-56 pb-12 overflow-x-auto">
        {children}
      </main>
    </div>
  );
};

export { DashboardLayout };
