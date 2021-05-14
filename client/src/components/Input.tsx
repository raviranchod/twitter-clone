import { FormLabel } from "./FormLabel";
import { VisuallyHidden } from "./VisuallyHidden";

type InputProps = {
  className?: string;
  id: string;
  label: string;
  type?: "text" | "password";
};

const Input = ({ className, id, label, type = "text" }: InputProps) => {
  return (
    <>
      <VisuallyHidden>
        <FormLabel className="mb-1" htmlFor={id}>
          {label}
        </FormLabel>
      </VisuallyHidden>
      <input
        className={`w-full px-2 py-3 rounded-lg border-cloudy focus:border-primary-light border-solid border-4 focus:outline-none font-bold transition placeholder-black ${className}`}
        type={type}
        placeholder={label}
        id={id}
      />
    </>
  );
};

export { Input };
