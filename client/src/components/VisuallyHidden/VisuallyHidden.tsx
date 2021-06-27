export type VisuallyHiddenProps = {
  as?: "span" | "p";
  children: React.ReactNode;
  type?: any;
};

const VisuallyHidden = ({ as = "span", children }: VisuallyHiddenProps) => {
  const Element = as;

  return <Element className='sr-only'>{children}</Element>;
};

export { VisuallyHidden };
