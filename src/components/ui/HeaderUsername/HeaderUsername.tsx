"use client";
import { useUser } from "@/context/UserContext";
import { PropsWithChildren } from "react";

export default function HeaderUsername({ children }: PropsWithChildren) {
  const { user } = useUser();
  return (
    <h3 className="text-3xl font-bold">
      {children} {user?.username}
    </h3>
  );
}
