import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { Link } from "../Link";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { ProfileImage } from "../ProfileImage";

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className }: SidebarProps) => {
  const router = useRouter();
  const username = useSelector((state: RootState) => state.user.username);
  return (
    <aside
      className={`h-full w-16 lg:w-56 space-y-8 py-4 px-2 lg:py-8 ${className}`}
    >
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
      <Navigation />
    </aside>
  );
};

export { Sidebar };
