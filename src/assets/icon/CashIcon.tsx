import { FC, SVGProps } from "react";
export const CashIcon: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4142 9.58579C19.8284 9 18.8856 9 17 9H11C9.11438 9 8.17157 9 7.58579 9.58579C7 10.1716 7 11.1144 7 13V15C7 16.8856 7 17.8284 7.58579 18.4142C8.17157 19 9.11438 19 11 19H17C18.8856 19 19.8284 19 20.4142 18.4142C21 17.8284 21 16.8856 21 15V13C21 11.1144 21 10.1716 20.4142 9.58579ZM14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
      fill="currentColor"
    />

    <path
      d="M7 13C7 11.1144 7 10.1716 7.58579 9.58579C8.17157 9 9.11438 9 11 9H14H17C18.8856 9 19.8284 9 20.4142 9.58579C21 10.1716 21 11.1144 21 13V14V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H14H11C9.11438 19 8.17157 19 7.58579 18.4142C7 17.8284 7 16.8856 7 15V14V13Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />

    <path
      d="M7 15V15C5.11438 15 4.17157 15 3.58579 14.4142C3.58579 14.4142 3.58579 14.4142 3.58579 14.4142C3 13.8284 3 12.8856 3 11L3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5L13 5C14.8856 5 15.8284 5 16.4142 5.58579C17 6.17157 17 7.11438 17 9V9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />

    <path
      d="M16 14C16 15.1046 15.1046 16 14 16C12.8954 16 12 15.1046 12 14C12 12.8954 12.8954 12 14 12C15.1046 12 16 12.8954 16 14Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
