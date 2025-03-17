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

export interface ResumenBody {
  lastQuantity: MaximumQuantity | null;
  expenses: Expenses | null;
}
