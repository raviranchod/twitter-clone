export type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ as = "h1", children, className }: HeadingProps) => {
  const H = as;
  return <H className={className}>{children}</H>;
};

export { Heading };
