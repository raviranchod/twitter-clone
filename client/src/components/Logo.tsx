import LogoSvg from "../assets/logo.svg";

type LogoProps = {
  className?: string;
  height: "sm" | "md" | "lg";
};

const Logo = ({ className, height = "md" }: LogoProps) => {
  const heightClassName = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };
  return (
    <LogoSvg
      className={`stroke-current text-primary ${heightClassName[height]} ${className}`}
    />
  );
};

export { Logo };
