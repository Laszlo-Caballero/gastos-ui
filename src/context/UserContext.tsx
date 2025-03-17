"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
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
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
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
    setUser(null);
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
