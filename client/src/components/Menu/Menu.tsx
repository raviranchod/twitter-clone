import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { ExploreIcon } from "../../icons/explore";
import { HomeIcon } from "../../icons/home";
import { ProfileIcon } from "../../icons/profile";

import { RootState } from "../../redux/store";
import { MenuItem } from "../MenuItem";

type MenuProps = {
  isDesktop: boolean;
};

const Menu = ({ isDesktop }: MenuProps) => {
  const router = useRouter();

  const username = useSelector((state: RootState) => state.user.username);

  const menuItems = [
    {
      title: "Home",
      href: "/home",
      icon: HomeIcon,
    },
    {
      title: "Explore",
      href: "/explore",
      icon: ExploreIcon,
    },
    {
      title: "Profile",
      href: `/${username}`,
      icon: ProfileIcon,
    },
  ];

  return (
    <ul className="space-y-2 lg:px-0">
      {menuItems.map((item) => {
        const isCurrentRoute = router.asPath === item.href;
        return (
          <li key={`navigation-${item.title}`}>
            <MenuItem
              title={item.title}
              href={item.href}
              icon={item.icon}
              isCurrentRoute={isCurrentRoute}
              isDesktop={isDesktop}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { Menu };
