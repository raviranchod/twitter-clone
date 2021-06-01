import { Sidebar } from "../components/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <div className="h-full flex">
    <Sidebar className="fixed overflow-y-auto" />
    <main className="w-full bg-primary-lightest ml-24 lg:ml-56">
      {children}
    </main>
  </div>
);

export { DashboardLayout };
