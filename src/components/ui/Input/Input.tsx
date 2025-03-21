"use client";
import React, { forwardRef, InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, ...props }, ref) => {
    const id = useId();

    return (
      <div className="flex flex-col w-full">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props}
        />
        <p className="text-red-500">{errors}</p>
      </div>
    );
  }
);

Input.displayName = "Input";
