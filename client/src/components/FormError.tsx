import { Text } from "./Text";

type FormErrorProps = {
  children: React.ReactNode;
  className?: string;
};

const FormError = ({ children, className }: FormErrorProps) => (
  <Text className={`text-sm text-red-dark ${className}`}>{children}</Text>
);

export { FormError };
