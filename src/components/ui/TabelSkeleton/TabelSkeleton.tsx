interface TabelSkeletonProps {
  cols: number;
  rows: number;
}

export default function TabelSkeleton({ cols, rows }: TabelSkeletonProps) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 animate-pulse">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Array.from({ length: cols }, (_, i) => {
              return (
                <th scope="col" className="px-6 py-3" key={i}>
                  <div className="flex">
                    <span className="w-full rounded-xl h-4 bg-gray-400 animate-pulse "></span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, i) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                key={i}
              >
                {Array.from({ length: cols }, (_, i) => {
                  return (
                    <td className="px-6 py-4" key={i}>
                      <div className="flex">
                        <span className="w-full rounded-xl h-4 bg-gray-400 animate-pulse "></span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
