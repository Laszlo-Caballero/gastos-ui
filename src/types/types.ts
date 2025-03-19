import { ReactNode } from "react";

export interface User {
  userId: number;
  username: string;
  token: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
export interface UserBody {
  user: User;
  token: string;
}

export interface Responsive<T> {
  message: string;
  body: T;
  status: number;
}

export interface MaximumQuantity {
  maximumQuantityId: number;
  quantity: number;
  initialDate: string;
  extra: number;
}
export interface Expenses {
  expenseId: number;
  expenseName: string;
  expenseAmount: number;
  expenseDate: string;
}

export interface ResponsiveMaximumQuantity {
  maximumQuantities: MaximumQuantity[];
  totalPages: number;
}

export interface ResumenBody {
  lastQuantity: MaximumQuantity | null;
  expenses: {
    total: number;
    lastExpense: Expenses | null;
  };
}
export interface ColumnDef<T> {
  header?: string;
  headerComponent?: () => ReactNode;
  accessorKey?: keyof T;
  cell?: (row: { row: T }) => ReactNode;
  footer?: string;
  footerComponent?: () => ReactNode;
}
