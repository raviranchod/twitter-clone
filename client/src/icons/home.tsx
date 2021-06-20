import { IconProps } from "../types/icon";

const HomeIcon = ({ className }: IconProps) => (
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
    <path d="M5 12L3 12 12 3 21 12 19 12"></path>
    <path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
    <path d="M10 12H14V16H10z"></path>
  </svg>
);

export { HomeIcon };
