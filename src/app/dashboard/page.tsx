import { CashIcon } from "@/assets/icon/CashIcon";
import CardLink from "@/components/ui/CardLink/CardLink";
import HeaderUsername from "@/components/ui/HeaderUsername/HeaderUsername";
import { GetResumen } from "@/services/MaxQuantity";
import { cookies } from "next/headers";
import React from "react";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const data = await GetResumen(token);
  return (
    <div className="w-full h-full">
      <HeaderUsername>Welcome,</HeaderUsername>
      <div className="flex w-full mt-4 gap-x-4">
        <CardLink
          header="Maximum Quantity this moth"
          link="/dashboard/maximum-quantity"
          linkTitle="View all Maximum Quantity"
          icon={<CashIcon />}
        >
          <p className="font-normal text-gray-500 dark:text-gray-400">
            Quantity: {data.lastQuantity?.quantity || "Not set Maximum"}
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Extra: {data.lastQuantity?.extra || "No extra this month"}
          </p>
        </CardLink>
        <CardLink
          header="Last Expense"
          link="/dashboard/Expense"
          linkTitle="View all Expenses this moth"
          icon={<CashIcon />}
        >
          <p className="font-normal text-gray-500 dark:text-gray-400">
            Expense Name:{" "}
            {data.expenses?.expenseName || "No expense this month"}
          </p>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            {/* Extra: {data.extra} */}
            Expense Amount:{" "}
            {data.expenses?.expenseAmount || "No expense this month"}
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {/* Extra: {data.extra} */}
            Expense Date:{" "}
            {data.expenses?.expenseDate.split("T")[0] ||
              "No expense this month"}
          </p>
        </CardLink>
      </div>
    </div>
  );
}
