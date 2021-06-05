type FormLabelProps = {
  children: string;
  className?: string;
  htmlFor: string;
};

const FormLabel = ({ children, className, htmlFor }: FormLabelProps) => (
  <label htmlFor={htmlFor} className={`block text-sm ${className}`}>
    {children}
  </label>
);

export { FormLabel };
