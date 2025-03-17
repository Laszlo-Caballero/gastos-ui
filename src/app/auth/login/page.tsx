"use client";
import { LoginSchema } from "@/schemas/Login/Login.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/button/Button";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });
  const { login } = useUser();
  return (
    <div className="text-white">
      <form
        className="flex flex-col min-w-[500px] gap-y-4"
        onSubmit={handleSubmit((data) => {
          login(data);
        })}
      >
        <h4 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Inicia Sesion
        </h4>

        <Input
          label="Username"
          {...register("username")}
          placeholder="Username"
          errors={errors.username?.message}
        />

        <Input
          label="Password"
          type="password"
          {...register("password")}
          placeholder="•••••••••"
          errors={errors.username?.message}
        />
        <Button size="xl" className="mt-2">
          Iniciar Sesion
        </Button>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          No tienes cuenta?{" "}
          <Link
            href="register"
            className="font-medium text-cinder-500 hover:underline dark:text-primary-500"
          >
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
}
