import { tv } from "tailwind-variants";
import { reset, hasTransitions } from "./shared";
import hasFocus from "./shared/hasFocus.ts";
import hasDisabled from "./shared/hasDisabled.ts";

export default tv({
  slots: {
    root: [
      ...reset,
      ...hasTransitions,
      ...hasFocus,
      ...hasDisabled,
      "min-w-fit",
      "overflow-hidden",
      "inline-flex",
      "z-0",
      "rounded-md",
      "whitespace-nowrap",
      "font-medium",
      "items-center",
      "justify-center",
      "cursor-pointer",
      "active:opacity-90",
      "tap-highlight-transparent",
      "border",
      "bg-transparent",
      "group",
    ],
    start: "inline-flex items-center -ml-1",
    end: "inline-flex items-center -mr-1",
  },
  defaultVariants: {
    surface: "default",
    color: "default",
    size: "default",
    isLoading: false,
    fullWidth: false,
  },
  variants: {
    surface: {
      default: {
        root: [
          "bg-neutral-800",
          "text-neutral-50",
          "shadow",
          "hover:bg-neutral-800/90",
          "border-transparent",
        ],
      },
      outline: {
        root: [
          "border-neutral-400",
          "bg-transparent",
          "shadow-sm",
          "text-neutral-600",
          "hover:bg-neutral-100",
        ],
      },
      secondary: {
        root: [
          "bg-neutral-200",
          "text-neutral-600",
          "shadow-sm",
          "hover:bg-neutral-200/90",
          "border-transparent",
        ],
      },
      ghost: {
        root: [
          "text-neutral-600",
          "hover:bg-neutral-100/80",
          "border-transparent",
        ],
      },
      link: {
        root: [
          "underline",
          "text-neutral-800",
          "underline-offset-4",
          "hover:underline",
          "border-transparent",
        ],
      },
    },
    color: {
      default: [],
      positive: [],
      negative: [],
      warning: [],
    },
    size: {
      sm: {
        root: "h-7 px-3 text-sm",
      },
      default: {
        root: "h-8 px-4 text-base",
      },
      lg: {
        root: "h-9 px-6 text-md",
      },
    },
    isLoading: {
      true: {
        root: ["opacity-70", "cursor-wait", "pointer-events-none"],
      },
      false: [],
    },
    fullWidth: {
      true: {
        root: ["w-full"],
      },
      false: [],
    },
  },
  compoundVariants: [
    {
      surface: "default",
      color: "positive",
      class: {
        root: ["bg-green-600", "text-white", "hover:bg-green-600/90"],
      },
    },
    {
      surface: "outline",
      color: "positive",
      class: {
        root: ["border-green-500", "text-green-600", "hover:bg-green-50"],
      },
    },
    {
      surface: "secondary",
      color: "positive",
      class: {
        root: ["bg-green-100", "text-green-700", "hover:bg-green-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "positive",
      class: {
        root: ["text-green-600", "hover:bg-green-50"],
      },
    },
    {
      surface: "link",
      color: "positive",
      class: {
        root: "text-green-600",
      },
    },
    {
      surface: "default",
      color: "negative",
      class: {
        root: ["bg-red-600", "text-white", "hover:bg-red-600/90"],
      },
    },
    {
      surface: "outline",
      color: "negative",
      class: {
        root: ["border-red-500", "text-red-600", "hover:bg-red-50"],
      },
    },
    {
      surface: "secondary",
      color: "negative",
      class: {
        root: ["bg-red-100", "text-red-700", "hover:bg-red-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "negative",
      class: {
        root: ["text-red-600", "hover:bg-red-50"],
      },
    },
    {
      surface: "link",
      color: "negative",
      class: {
        root: "text-red-600",
      },
    },
    {
      surface: "default",
      color: "warning",
      class: {
        root: ["bg-yellow-500", "text-white", "hover:bg-yellow-500/90"],
      },
    },
    {
      surface: "outline",
      color: "warning",
      class: {
        root: ["border-yellow-400", "text-yellow-600", "hover:bg-yellow-50"],
      },
    },
    {
      surface: "secondary",
      color: "warning",
      class: {
        root: ["bg-yellow-100", "text-yellow-700", "hover:bg-yellow-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "warning",
      class: {
        root: ["text-yellow-600", "hover:bg-yellow-50"],
      },
    },
    {
      surface: "link",
      color: "warning",
      class: {
        root: "text-yellow-600",
      },
    },
  ],
});
