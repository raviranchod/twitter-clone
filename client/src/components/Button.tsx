import { Link } from "./Link";

type DefaultButtonProps = {
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
  variant?: "solid" | "outline";
};

type EventButtonProps = DefaultButtonProps & {
  href?: never;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type LinkButtonProps = DefaultButtonProps & {
  href: string;
  isDisabled?: never;
  isLoading?: never;
  onClick?: never;
  type?: never;
};

type ButtonProps = EventButtonProps | LinkButtonProps;

const Button = ({
  children,
  className,
  href,
  isDisabled,
  isFullWidth,
  isLoading,
  onClick,
  type = "button",
  variant = "solid",
}: ButtonProps) => {
  const defaultButtonClasses =
    "rounded-xl border-primary border-2 font-bold p-3 transition disabled:opacity-50 disabled:cursor-default";
  const variantClassnames = {
    solid:
      "bg-primary text-white border hover:bg-primary-dark hover:border-primary-dark disabled:bg-primary disabled:border-primary",
    outline:
      "bg-transparent text-primary hover:bg-primary-lightest disabled:bg-transparent",
  };

  const classNames = `${defaultButtonClasses} ${variantClassnames[variant]} ${
    className ?? ""
  } ${isFullWidth ? "w-full" : ""}`;

  if (href) {
    return (
      <Link href={href} className={`inline-block text-center ${classNames}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={isDisabled || isLoading}
      data-loading={isLoading}
      className={classNames}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
