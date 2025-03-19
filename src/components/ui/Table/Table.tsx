import { useTable } from "@/hooks/useTable";
import { ColumnDef } from "@/types/types";
import { cx } from "@/utils/cx";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: {
    container?: string;
    table?: string;
    header?: {
      th?: string;
      tr?: string;
      thead?: string;
    };
    body?: {
      tr?: string;
      td?: string;
      tbody?: string;
    };

    footer?: {
      tr?: string;
      td?: string;
      tfoot?: string;
    };
  };
}

export function Table<T>({ columns, data, className }: TableProps<T>) {
  const table = useTable({ columns, data });
  return (
    <div className={className?.container}>
      <table className={cx("w-full", className?.table)}>
        <thead className={className?.header?.thead}>
          <tr className={className?.header?.tr}>
            {table.getHeaders().map((header, i) => {
              return (
                <th className={className?.header?.th} key={i}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={className?.body?.tbody}>
          {table.getCells().map((row, index) => {
            return (
              <tr key={index} className={className?.body?.tr}>
                {row.map((cell, i) => {
                  return (
                    <td className={className?.body?.td} key={i}>
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

        <tfoot className={className?.footer?.tfoot}>
          <tr className={className?.footer?.tr}>
            {table.getFooter().map((footer, i) => {
              return (
                <td className={className?.footer?.td} key={i}>
                  {footer}
                </td>
              );
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
