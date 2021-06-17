type ErrorBubbleProps = {
  children: React.ReactNode;
  className?: string;
};

import { Text } from "./Text";

const ErrorBubble = ({ children, className }: ErrorBubbleProps) => (
  <div className={`bg-red rounded p-4 ${className}`}>
    <Text>{children}</Text>
  </div>
);

export { ErrorBubble };
