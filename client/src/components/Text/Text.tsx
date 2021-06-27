export type TextProps = {
  as?: "p" | "span";
  children: React.ReactNode;
  className?: string;
};

const Text = ({ as = "p", children, className }: TextProps) => {
  const T = as;
  return <T className={className}>{children}</T>;
};

export { Text };
