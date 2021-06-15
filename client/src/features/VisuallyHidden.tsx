type VisuallyHiddenProps = {
  as?: "span" | "p";
  children: React.ReactNode;
};

const VisuallyHidden = ({ as = "span", children }: VisuallyHiddenProps) => {
  const Element = as;

  return <Element className="sr-only">{children}</Element>;
};

export { VisuallyHidden };
