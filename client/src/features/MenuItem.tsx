import { Link } from "./Link";
import { Text } from "./Text";
import { VisuallyHidden } from "./VisuallyHidden";

type MenuItemIconProps = {
  className?: string;
};

type MenuItemProps = {
  icon: (props: MenuItemIconProps) => JSX.Element;
  isCurrentRoute?: boolean;
  isDesktop: boolean;
  title: string;
  href: string;
};

const MenuItem = ({
  icon,
  isCurrentRoute,
  isDesktop,
  title,
  href,
}: MenuItemProps) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className={`flex items-center font-bold py-4 lg:px-4 hover:bg-primary-lightest rounded-lg  ${
        isCurrentRoute && "text-primary"
      }`}
    >
      <Icon className="w-6 mx-auto lg:mx-0" />
      {isDesktop ? (
        <Text as="span" className="ml-4">
          {title}
        </Text>
      ) : (
        <VisuallyHidden>{title}</VisuallyHidden>
      )}
    </Link>
  );
};

export default MenuItem;
