import { IconProps } from "../types/icon";

const ProfileIcon = ({ className }: IconProps) => (
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
    <circle cx="12" cy="7" r="4"></circle>
    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"></path>
  </svg>
);

export { ProfileIcon };
