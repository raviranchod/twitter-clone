import LogoSvg from "../assets/logo.svg";

type LogoProps = {
  className?: string;
  height?: "sm" | "md" | "lg";
  stroke?: "primary" | "white";
};

const Logo = ({ className, height = "md", stroke = "primary" }: LogoProps) => {
  const heightClassName = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  return (
    <LogoSvg
      className={`text-${stroke} ${heightClassName[height]} ${className}`}
    />
  );
};

export { Logo };
