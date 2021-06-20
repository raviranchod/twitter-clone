import { IconProps } from "../types/icon";

const SpinnerIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 38 38"
    className={className}
  >
    <g fillRule="evenodd" strokeWidth="2" transform="translate(1 1)">
      <circle cx="18" cy="18" r="18" strokeOpacity="0.5"></circle>
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          dur="1s"
          from="0 18 18"
          repeatCount="indefinite"
          to="360 18 18"
          type="rotate"
        ></animateTransform>
      </path>
    </g>
  </svg>
);

export { SpinnerIcon };
