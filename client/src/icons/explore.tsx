import { IconProps } from "../types/icon";

const ExploreIcon = ({ className }: IconProps) => (
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
    <path d="M5 9L19 9"></path>
    <path d="M5 15L19 15"></path>
    <path d="M11 4L7 20"></path>
    <path d="M17 4L13 20"></path>
  </svg>
);

export { ExploreIcon };
