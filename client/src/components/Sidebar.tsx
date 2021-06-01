import { Link } from "./Link";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => (
  <aside className={`h-full w-24 lg:w-56 p-4 lg:p-8 space-y-8 ${className}`}>
    <Link href="/home">
      <Logo size="sm" />
    </Link>
    <Navigation />
  </aside>
);

export { Sidebar };
