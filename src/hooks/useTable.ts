import { ReactNode, useCallback } from "react";
import { ColumnDef } from "../types/types";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function useTable<T>({ columns, data }: TableProps<T>) {
  const getHeaders = useCallback(() => {
    return columns.map((column) => column.header || column.headerComponent?.());
  }, [columns]);

  const getCells = useCallback(() => {
    return data.map((row) => {
      return columns.map((column) => {
        return column.accessorKey
          ? (row[column.accessorKey] as ReactNode)
          : column.cell?.({ row });
      });
    });
  }, [columns, data]);

  const getFooter = useCallback(() => {
    return columns.map((column) => column.footer || column.footerComponent?.());
  }, [columns]);

  return {
    getHeaders,
    getCells,
    getFooter,
  };
}
