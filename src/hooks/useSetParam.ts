"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SetParamProps<T> {
  initialParams: T;
}

export function useSetParam<T extends Record<string, any>>({
  initialParams,
}: SetParamProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [params, setParam] = useState<T>(initialParams);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    router.push(`?${newParams.toString()}`, { scroll: false });
  }, [params]);

  const setQueryParams = (newParams: Partial<T>) => {
    setParam((prev) => ({
      ...prev,
      ...newParams,
    }));
  };

  return {
    setQueryParams,
    params,
  };
}
