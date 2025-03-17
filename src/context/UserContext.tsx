"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Responsive, User, UserBody, UserLogin } from "../types/types";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { envConfig } from "@/config/envConfig";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
type UserContextType = {
  user: User | null;
  login: (user: UserLogin) => void;
  register: (user: UserLogin) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>({
    token: "",
    userId: -1,
    username: "",
  });
  const router = useRouter();

  useEffect(() => {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      mutateUser({ token: tokenCookies });
    }

    const tokenLocalStorage = localStorage.getItem("token");
    if (tokenLocalStorage) {
      Cookies.set("token", tokenLocalStorage, {
        expires: 1,
      });
      mutateUser({ token: tokenLocalStorage });
    }
  }, []);

  const { mutate: mutateUser } = useMutation<
    Responsive<User>,
    { token: string }
  >({
    mutationFn: async (data) => {
      const res = await axios.get(`${envConfig.API_URL}/auth/user`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      return res.data;
    },
    onSuccess: (data) => {
      const token = Cookies.get("token");
      setUser({
        token: token!,
        userId: data.body.userId,
        username: data.body.username,
      });
    },
  });

  const { mutate } = useMutation<Responsive<UserBody>, UserLogin>({
    mutationFn: async (data) => {
      const res = await axios.post(`${envConfig.API_URL}/auth/login`, data);
      return res.data;
    },
    onSuccess: (data) => {
      setUser(data.body.user);
      Cookies.set("token", data.body.token, {
        expires: 1,
      });
      router.push("/dashboard");
    },
  });

  const { mutate: registerMutate } = useMutation<
    Responsive<UserBody>,
    UserLogin
  >({
    mutationFn: async (data) => {
      const res = await axios.post(`${envConfig.API_URL}/auth/register`, data);
      return res.data;
    },
    onSuccess: (data) => {
      setUser(data.body.user);
      Cookies.set("token", data.body.token, {
        expires: 1,
      });
      localStorage.setItem("token", data.body.token);
      localStorage.setItem("user", JSON.stringify(data.body.user));
      router.push("/dashboard");
    },
  });

  const login = (user: UserLogin) => {
    mutate(user);
  };

  const register = (user: UserLogin) => {
    registerMutate(user);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser({
      token: "",
      userId: -1,
      username: "",
    });
    router.push("/auth/login");
  };

  return (
    <UserContext.Provider value={{ user: user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
