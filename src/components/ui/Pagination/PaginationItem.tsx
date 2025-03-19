import { PropsWithChildren } from "react";
import { usePagination } from "./Pagination";

interface PaginationItemProps extends PropsWithChildren {
  onClick?: () => void;
  index: number;
}

export default function PaginationItem({
  children,
  index,
  onClick,
}: PaginationItemProps) {
  const { setPage } = usePagination();

  return (
    <li>
      <button
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => {
          onClick?.();
          setPage(index);
        }}
      >
        {children}
      </button>
    </li>
  );
}
