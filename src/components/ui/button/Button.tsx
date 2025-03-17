import { cva, cx, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const button = cva(
  "font-medium rounded-lg focus:outline-none focus:ring-4 text-center",
  {
    variants: {
      colors: {
        default:
          "text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800",
        alternative:
          "text-gray-900  bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
        dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        light:
          "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
        green:
          "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        red: "text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
      },
      size: {
        xs: "px-3 py-2 text-xs",
        sm: "px-3 py-2 text-sm",
        base: "px-5 py-2.5 text-sm",
        lg: "px-5 py-3 text-base",
        xl: "px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      colors: "default",
      size: "base",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colors, size, className, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cx(button({ colors, size }), className)}>
        {children}
      </button>
    );
  }
);
