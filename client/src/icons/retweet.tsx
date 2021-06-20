import { IconProps } from "../types/icon";

const RetweetIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M10.09 4.01l.496-.495a2 2 0 012.828 0l7.071 7.07a2 2 0 010 2.83l-7.07 7.07a2 2 0 01-2.83 0l-7.07-7.07a2 2 0 010-2.83L7.05 7.05H3.062m3.988 3.988V7.05"></path>
    </svg>
  );
};

export { RetweetIcon };
