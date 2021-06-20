import { IconProps } from "../types/icon";

const ReplyIcon = ({ className }: IconProps) => {
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
      <path d="M3 20l1.3-3.9A9 8 0 117.7 19L3 20"></path>
      <path d="M12 12L12 12.01"></path>
      <path d="M8 12L8 12.01"></path>
      <path d="M16 12L16 12.01"></path>
    </svg>
  );
};

export { ReplyIcon };
