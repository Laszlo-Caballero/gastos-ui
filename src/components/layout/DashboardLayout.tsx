"use client";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";
import Aside from "./Aside/Aside";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const pathName = usePathname();

  if (pathName.includes("auth")) return children;

  return (
    <main className="flex w-full bg-cinder-950 text-white">
      <div className="flex flex-1 min-h-screen w-full">
        <Aside />
        <div className="w-full h-full p-4">{children}</div>
      </div>
    </main>
  );
}
