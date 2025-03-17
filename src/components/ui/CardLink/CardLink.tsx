import Link from "next/link";
import {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";

interface CardLinkProps extends PropsWithChildren {
  header?: string;
  link: string;
  linkTitle?: string;
  icon?: ReactNode;
  className?: string;
}

export default function CardLink({
  header,
  icon,
  link,
  children,
  linkTitle,
  className,
}: CardLinkProps) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      {isValidElement(icon) &&
        cloneElement(icon as ReactElement<HTMLDivElement>, {
          ...(icon as ReactElement<HTMLDivElement>).props,
          className: "w-7 h-7 text-gray-500 dark:text-gray-400 mb-3",
        })}

      <Link href={link}>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {header}
        </h5>
      </Link>
      <div className={className}>{children}</div>
      <Link
        href={link}
        className="inline-flex font-medium items-center text-blue-600 hover:underline mt-auto"
      >
        {linkTitle}
        <svg
          className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </Link>
    </div>
  );
}
