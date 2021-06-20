import { IconProps } from "../types/icon";

const LikeIcon = ({ className }: IconProps) => (
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
    <path d="M19.5 13.572L12 21l-7.5-7.428m0 0A5 5 0 1112 7.006a5 5 0 117.5 6.572"></path>
  </svg>
);

export { LikeIcon };
