import LogoSvg from "../assets/logo.svg";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  stroke?: "primary" | "white";
};

const Logo = ({ className, size = "md", stroke = "primary" }: LogoProps) => {
  const sizeClassName = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  return (
    <LogoSvg className={`text-${stroke} ${sizeClassName[size]} ${className}`} />
  );
};

export { Logo };
