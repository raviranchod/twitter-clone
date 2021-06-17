import LogoSvg from "../assets/logo.svg";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  stroke?: "primary" | "white";
};

const Logo = ({ className, size = "md", stroke = "primary" }: LogoProps) => {
  const sizeClassName = {
    sm: "w-6",
    md: "w-8",
    lg: "w-12",
  };
  return (
    <LogoSvg className={`text-${stroke} ${sizeClassName[size]} ${className}`} />
  );
};

export { Logo };
