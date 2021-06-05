import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import HomeSvg from "../../assets/home.svg";
import { Link } from "../Link";
import ProfileSvg from "../../assets/profile.svg";
import { Text } from "../Text";
import { VisuallyHidden } from "../VisuallyHidden";

import { RootState } from "../../redux/store";
import { tailwindTheme } from "../../utils/tailwindTheme";
import { useWindowSize } from "../../utils/useWindowSize";

const Navigation = () => {
  const { windowSize } = useWindowSize();
  const { theme } = tailwindTheme();
  const largeBreakpoint = parseInt(theme.screens.lg);

  const router = useRouter();

  const username = useSelector((state: RootState) => state.user.username);

  const navigationItems = [
    {
      title: "Home",
      href: "/home",
      icon: HomeSvg,
    },
    {
      title: "Profile",
      href: `/${username}`,
      icon: ProfileSvg,
    },
  ];
  return (
    <ul className="space-y-8">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isCurrentRoute = router.pathname === item.href;
        return (
          <li key={`navigation-${item.title}`}>
            <Link
              href={item.href}
              className={`flex items-center font-bold ${
                isCurrentRoute && "text-primary"
              }`}
            >
              <Icon className="w-6 mx-auto lg:mx-0" />
              {windowSize.width && windowSize.width > largeBreakpoint ? (
                <Text as="span" className="ml-4">
                  {item.title}
                </Text>
              ) : (
                <VisuallyHidden>{item.title}</VisuallyHidden>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Navigation };
