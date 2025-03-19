"use client";
import Pagination from "@/components/ui/Pagination/Pagination";
import PaginationItem from "@/components/ui/Pagination/PaginationItem";
import TabelSkeleton from "@/components/ui/TabelSkeleton/TabelSkeleton";
import { Table } from "@/components/ui/Table/Table";
import { useQuery } from "@/hooks/useQuery";
import { useSetParam } from "@/hooks/useSetParam";
import { GetMaximumQuantity } from "@/services/MaxQuantity";
import { ResponsiveMaximumQuantity } from "@/types/types";
import Cookies from "js-cookie";
import { Suspense } from "react";

function MaximumQuantityPage() {
  const token = Cookies.get("token");
  const { params, setQueryParams } = useSetParam({
    initialParams: {
      page: 1,
      limit: 15,
    },
  });

  const { data, isError, isLoading } = useQuery<ResponsiveMaximumQuantity>({
    queryFn: () => GetMaximumQuantity(token, params.limit, params.page),
    dependencies: [params],
  });

  if (isLoading) return <TabelSkeleton cols={4} rows={15} />;
  if (isError || !data) return <div>Error</div>;

  return (
    <Suspense fallback={<TabelSkeleton cols={4} rows={15} />}>
      <div className="w-full h-full">
        <h3 className="font-medium text-2xl">Maximum Quantity</h3>
        <Table
          className={{
            table:
              "h-full mt-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-hidden overflow-x-auto border border-gray-200 dark:border-gray-700",
            header: {
              thead:
                "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400",
              th: "px-6 py-3",
            },
            body: {
              tr: "bg-white border-b dark:bg-cinder-950 dark:border-gray-700 border-gray-200",
              td: "h-full px-6 py-4 max-w-[500px] truncate",
            },
            container: "overflow-y-auto relative",
          }}
          data={data.maximumQuantities}
          columns={[
            {
              header: "Quantity",
              cell(row) {
                return (
                  <span className="w-full text-center">{row.row.quantity}</span>
                );
              },
            },
            {
              header: "Extra",
              accessorKey: "extra",
            },
            {
              header: "Date",
              cell(props) {
                return <span>{props.row.initialDate.split("T")[0]}</span>;
              },
            },
          ]}
        />
        <div className="w-full flex justify-end mt-4">
          <Pagination onClick={(page) => setQueryParams({ page })}>
            {Array.from({ length: data.totalPages }, (_, i) => i + 1).map(
              (page) => {
                return (
                  <PaginationItem
                    index={page}
                    key={page}
                    onClick={() => setQueryParams({ page })}
                  >
                    {page}
                  </PaginationItem>
                );
              }
            )}
          </Pagination>
        </div>
      </div>
    </Suspense>
  );
}

export default function MaximumQuantityContainer() {
  return (
    <Suspense fallback={<TabelSkeleton cols={4} rows={15} />}>
      <MaximumQuantityPage />
    </Suspense>
  );
}
