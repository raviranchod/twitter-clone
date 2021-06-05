import { forwardRef } from "react";
import { FormError } from "../FormError";
import { FormLabel } from "../FormLabel";
import { VisuallyHidden } from "../VisuallyHidden";

type InputProps = {
  className?: string;
  errors?: string;
  id: string;
  label: string;
  type?: "text" | "password";
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, errors, id, label, type = "text", ...rest } = props;
  return (
    <>
      <VisuallyHidden>
        <FormLabel className="mb-1" htmlFor={id}>
          {label}
        </FormLabel>
      </VisuallyHidden>
      <input
        className={`w-full px-2 py-3 rounded-lg ${
          errors
            ? "bg-red-light border-red focus:border-red"
            : "bg-white border-cloudy focus:border-primary-light"
        } border-solid border-2 focus:outline-none font-bold transition ${className}`}
        type={type}
        placeholder={label}
        id={id}
        ref={ref}
        {...rest}
      />
      <FormError>{errors}</FormError>
    </>
  );
});

export { Input };
