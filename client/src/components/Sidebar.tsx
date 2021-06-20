import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Link } from "./Link";
import { Logo } from "./Logo";
import { LogoutIcon } from "../icons/logout";
import { Menu } from "./Menu";
import MenuItem from "./MenuItem";
import { ProfileImage } from "./ProfileImage";

import { tailwindTheme } from "../utils/tailwindTheme";
import { useWindowSize } from "../libs/useWindowSize";

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  const router = useRouter();
  const username = useSelector((state: RootState) => state.user.username);

  const { width } = useWindowSize();
  const { theme } = tailwindTheme();
  const largeBreakpoint = parseInt(theme.screens.lg);
  const isDesktop = width! >= largeBreakpoint;

  return (
    <aside
      className={`flex flex-col justify-between h-full w-16 lg:w-56 py-4 px-2 lg:py-8 ${className}`}
    >
      <div className="space-y-8">
        <div className="px-3 lg:px-4">
          {router.asPath === "/home" ? (
            <Link href={`/${username}`}>
              <ProfileImage
                src="https://picsum.photos/200/200"
                alt="Image"
                size="sm"
              />
            </Link>
          ) : (
            <Link href="/home">
              <Logo size="sm" className="mx-auto lg:mx-0" />
            </Link>
          )}
        </div>
        <Menu isDesktop={isDesktop} />
      </div>
      <MenuItem
        title="Logout"
        href="/logout"
        icon={LogoutIcon}
        isDesktop={isDesktop}
      />
    </aside>
  );
};

export { Sidebar };
