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
