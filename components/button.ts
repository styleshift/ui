import { tv } from "tailwind-variants";
import { reset, hasTransitions, hasFocus, hasDisabled } from "./shared";

const button = tv({
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
    fullWidth: false,
    disabled: false,
    focus: false,
  },
  variants: {
    surface: {
      default: {
        root: ["bg-neutral-800", "text-neutral-50", "hover:bg-neutral-800/90"],
      },
      outline: {
        root: [
          "border-neutral-400",
          "bg-transparent",
          "text-neutral-600",
          "hover:bg-neutral-100",
        ],
      },
      secondary: {
        root: [
          "bg-neutral-200",
          "text-neutral-600",
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
      red: [],
      orange: [],
      amber: [],
      yellow: [],
      lime: [],
      green: [],
      emerald: [],
      teal: [],
      cyan: [],
      sky: [],
      blue: [],
      indigo: [],
      violet: [],
      purple: [],
      fuchsia: [],
      pink: [],
      rose: [],
      positive: [],
      negative: [],
      warning: [],
    },
    size: {
      xs: {
        root: "h-6 px-2 text-xs",
      },
      sm: {
        root: "h-7 px-3 text-sm",
      },
      default: {
        root: "h-8 px-4 text-base",
      },
      md: {
        root: "h-9 px-6 text-md",
      },
      lg: {
        root: "h-10 px-8 text-lg",
      },
      xl: {
        root: "h-12 px-10 text-xl",
      },
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
      color: "red",
      class: {
        root: [
          "bg-red-600",
          "text-white",
          "hover:bg-red-600/90",
          "focus:ring-red-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "red",
      class: {
        root: ["border-red-500", "text-red-600", "hover:bg-red-50"],
      },
    },
    {
      surface: "secondary",
      color: "red",
      class: {
        root: ["bg-red-100", "text-red-700", "hover:bg-red-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "red",
      class: {
        root: ["text-red-600", "hover:bg-red-50"],
      },
    },
    {
      surface: "link",
      color: "red",
      class: {
        root: "text-red-600",
      },
    },
    {
      surface: "default",
      color: "orange",
      class: {
        root: [
          "bg-orange-600",
          "text-white",
          "hover:bg-orange-600/90",
          "focus:ring-orange-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "orange",
      class: {
        root: ["border-orange-500", "text-orange-600", "hover:bg-orange-50"],
      },
    },
    {
      surface: "secondary",
      color: "orange",
      class: {
        root: ["bg-orange-100", "text-orange-700", "hover:bg-orange-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "orange",
      class: {
        root: ["text-orange-600", "hover:bg-orange-50"],
      },
    },
    {
      surface: "link",
      color: "orange",
      class: {
        root: "text-orange-600",
      },
    },
    {
      surface: "default",
      color: "amber",
      class: {
        root: [
          "bg-amber-600",
          "text-white",
          "hover:bg-amber-600/90",
          "focus:ring-amber-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "amber",
      class: {
        root: ["border-amber-500", "text-amber-600", "hover:bg-amber-50"],
      },
    },
    {
      surface: "secondary",
      color: "amber",
      class: {
        root: ["bg-amber-100", "text-amber-700", "hover:bg-amber-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "amber",
      class: {
        root: ["text-amber-600", "hover:bg-amber-50"],
      },
    },
    {
      surface: "link",
      color: "amber",
      class: {
        root: "text-amber-600",
      },
    },
    {
      surface: "default",
      color: "lime",
      class: {
        root: [
          "bg-lime-600",
          "text-white",
          "hover:bg-lime-600/90",
          "focus:ring-lime-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "lime",
      class: {
        root: ["border-lime-500", "text-lime-600", "hover:bg-lime-50"],
      },
    },
    {
      surface: "secondary",
      color: "lime",
      class: {
        root: ["bg-lime-100", "text-lime-700", "hover:bg-lime-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "lime",
      class: {
        root: ["text-lime-600", "hover:bg-lime-50"],
      },
    },
    {
      surface: "link",
      color: "lime",
      class: {
        root: "text-lime-600",
      },
    },
    {
      surface: "default",
      color: "emerald",
      class: {
        root: [
          "bg-emerald-600",
          "text-white",
          "hover:bg-emerald-600/90",
          "focus:ring-emerald-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "emerald",
      class: {
        root: ["border-emerald-500", "text-emerald-600", "hover:bg-emerald-50"],
      },
    },
    {
      surface: "secondary",
      color: "emerald",
      class: {
        root: ["bg-emerald-100", "text-emerald-700", "hover:bg-emerald-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "emerald",
      class: {
        root: ["text-emerald-600", "hover:bg-emerald-50"],
      },
    },
    {
      surface: "link",
      color: "emerald",
      class: {
        root: "text-emerald-600",
      },
    },
    {
      surface: "default",
      color: "teal",
      class: {
        root: [
          "bg-teal-600",
          "text-white",
          "hover:bg-teal-600/90",
          "focus:ring-teal-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "teal",
      class: {
        root: ["border-teal-500", "text-teal-600", "hover:bg-teal-50"],
      },
    },
    {
      surface: "secondary",
      color: "teal",
      class: {
        root: ["bg-teal-100", "text-teal-700", "hover:bg-teal-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "teal",
      class: {
        root: ["text-teal-600", "hover:bg-teal-50"],
      },
    },
    {
      surface: "link",
      color: "teal",
      class: {
        root: "text-teal-600",
      },
    },
    {
      surface: "default",
      color: "cyan",
      class: {
        root: [
          "bg-cyan-600",
          "text-white",
          "hover:bg-cyan-600/90",
          "focus:ring-cyan-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "cyan",
      class: {
        root: ["border-cyan-500", "text-cyan-600", "hover:bg-cyan-50"],
      },
    },
    {
      surface: "secondary",
      color: "cyan",
      class: {
        root: ["bg-cyan-100", "text-cyan-700", "hover:bg-cyan-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "cyan",
      class: {
        root: ["text-cyan-600", "hover:bg-cyan-50"],
      },
    },
    {
      surface: "link",
      color: "cyan",
      class: {
        root: "text-cyan-600",
      },
    },
    {
      surface: "default",
      color: "sky",
      class: {
        root: [
          "bg-sky-600",
          "text-white",
          "hover:bg-sky-600/90",
          "focus:ring-sky-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "sky",
      class: {
        root: ["border-sky-500", "text-sky-600", "hover:bg-sky-50"],
      },
    },
    {
      surface: "secondary",
      color: "sky",
      class: {
        root: ["bg-sky-100", "text-sky-700", "hover:bg-sky-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "sky",
      class: {
        root: ["text-sky-600", "hover:bg-sky-50"],
      },
    },
    {
      surface: "link",
      color: "sky",
      class: {
        root: "text-sky-600",
      },
    },
    {
      surface: "default",
      color: "blue",
      class: {
        root: [
          "bg-blue-600",
          "text-white",
          "hover:bg-blue-600/90",
          "focus:ring-blue-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "blue",
      class: {
        root: ["border-blue-500", "text-blue-600", "hover:bg-blue-50"],
      },
    },
    {
      surface: "secondary",
      color: "blue",
      class: {
        root: ["bg-blue-100", "text-blue-700", "hover:bg-blue-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "blue",
      class: {
        root: ["text-blue-600", "hover:bg-blue-50"],
      },
    },
    {
      surface: "link",
      color: "blue",
      class: {
        root: "text-blue-600",
      },
    },
    {
      surface: "default",
      color: "indigo",
      class: {
        root: [
          "bg-indigo-600",
          "text-white",
          "hover:bg-indigo-600/90",
          "focus:ring-indigo-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "indigo",
      class: {
        root: ["border-indigo-500", "text-indigo-600", "hover:bg-indigo-50"],
      },
    },
    {
      surface: "secondary",
      color: "indigo",
      class: {
        root: ["bg-indigo-100", "text-indigo-700", "hover:bg-indigo-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "indigo",
      class: {
        root: ["text-indigo-600", "hover:bg-indigo-50"],
      },
    },
    {
      surface: "link",
      color: "indigo",
      class: {
        root: "text-indigo-600",
      },
    },
    {
      surface: "default",
      color: "violet",
      class: {
        root: [
          "bg-violet-600",
          "text-white",
          "hover:bg-violet-600/90",
          "focus:ring-violet-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "violet",
      class: {
        root: ["border-violet-500", "text-violet-600", "hover:bg-violet-50"],
      },
    },
    {
      surface: "secondary",
      color: "violet",
      class: {
        root: ["bg-violet-100", "text-violet-700", "hover:bg-violet-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "violet",
      class: {
        root: ["text-violet-600", "hover:bg-violet-50"],
      },
    },
    {
      surface: "link",
      color: "violet",
      class: {
        root: "text-violet-600",
      },
    },
    {
      surface: "default",
      color: "purple",
      class: {
        root: [
          "bg-purple-600",
          "text-white",
          "hover:bg-purple-600/90",
          "focus:ring-purple-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "purple",
      class: {
        root: ["border-purple-500", "text-purple-600", "hover:bg-purple-50"],
      },
    },
    {
      surface: "secondary",
      color: "purple",
      class: {
        root: ["bg-purple-100", "text-purple-700", "hover:bg-purple-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "purple",
      class: {
        root: ["text-purple-600", "hover:bg-purple-50"],
      },
    },
    {
      surface: "link",
      color: "purple",
      class: {
        root: "text-purple-600",
      },
    },
    {
      surface: "default",
      color: "fuchsia",
      class: {
        root: [
          "bg-fuchsia-600",
          "text-white",
          "hover:bg-fuchsia-600/90",
          "focus:ring-fuchsia-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "fuchsia",
      class: {
        root: ["border-fuchsia-500", "text-fuchsia-600", "hover:bg-fuchsia-50"],
      },
    },
    {
      surface: "secondary",
      color: "fuchsia",
      class: {
        root: ["bg-fuchsia-100", "text-fuchsia-700", "hover:bg-fuchsia-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "fuchsia",
      class: {
        root: ["text-fuchsia-600", "hover:bg-fuchsia-50"],
      },
    },
    {
      surface: "link",
      color: "fuchsia",
      class: {
        root: "text-fuchsia-600",
      },
    },
    {
      surface: "default",
      color: "pink",
      class: {
        root: [
          "bg-pink-600",
          "text-white",
          "hover:bg-pink-600/90",
          "focus:ring-pink-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "pink",
      class: {
        root: ["border-pink-500", "text-pink-600", "hover:bg-pink-50"],
      },
    },
    {
      surface: "secondary",
      color: "pink",
      class: {
        root: ["bg-pink-100", "text-pink-700", "hover:bg-pink-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "pink",
      class: {
        root: ["text-pink-600", "hover:bg-pink-50"],
      },
    },
    {
      surface: "link",
      color: "pink",
      class: {
        root: "text-pink-600",
      },
    },
    {
      surface: "default",
      color: "rose",
      class: {
        root: [
          "bg-rose-600",
          "text-white",
          "hover:bg-rose-600/90",
          "focus:ring-rose-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "rose",
      class: {
        root: ["border-rose-500", "text-rose-600", "hover:bg-rose-50"],
      },
    },
    {
      surface: "secondary",
      color: "rose",
      class: {
        root: ["bg-rose-100", "text-rose-700", "hover:bg-rose-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "rose",
      class: {
        root: ["text-rose-600", "hover:bg-rose-50"],
      },
    },
    {
      surface: "link",
      color: "rose",
      class: {
        root: "text-rose-600",
      },
    },
    {
      surface: "default",
      color: "yellow",
      class: {
        root: [
          "bg-yellow-600",
          "text-white",
          "hover:bg-yellow-600/90",
          "focus:ring-yellow-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "yellow",
      class: {
        root: ["border-yellow-500", "text-yellow-600", "hover:bg-yellow-50"],
      },
    },
    {
      surface: "secondary",
      color: "yellow",
      class: {
        root: ["bg-yellow-100", "text-yellow-700", "hover:bg-yellow-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "yellow",
      class: {
        root: ["text-yellow-600", "hover:bg-yellow-50"],
      },
    },
    {
      surface: "link",
      color: "yellow",
      class: {
        root: "text-yellow-600",
      },
    },
    {
      surface: "default",
      color: "green",
      class: {
        root: [
          "bg-green-600",
          "text-white",
          "hover:bg-green-600/90",
          "focus:ring-green-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "green",
      class: {
        root: ["border-green-500", "text-green-600", "hover:bg-green-50"],
      },
    },
    {
      surface: "secondary",
      color: "green",
      class: {
        root: ["bg-green-100", "text-green-700", "hover:bg-green-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "green",
      class: {
        root: ["text-green-600", "hover:bg-green-50"],
      },
    },
    {
      surface: "link",
      color: "green",
      class: {
        root: "text-green-600",
      },
    },
    {
      surface: "default",
      color: "positive",
      class: {
        root: [
          "bg-green-600",
          "text-white",
          "hover:bg-green-600/90",
          "focus:ring-green-600",
        ],
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
        root: [
          "bg-red-600",
          "text-white",
          "hover:bg-red-600/90",
          "focus:ring-red-600",
        ],
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
        root: [
          "bg-amber-600",
          "text-white",
          "hover:bg-amber-600/90",
          "focus:ring-amber-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "warning",
      class: {
        root: ["border-amber-500", "text-amber-600", "hover:bg-amber-50"],
      },
    },
    {
      surface: "secondary",
      color: "warning",
      class: {
        root: ["bg-amber-100", "text-amber-700", "hover:bg-amber-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "warning",
      class: {
        root: ["text-amber-600", "hover:bg-amber-50"],
      },
    },
    {
      surface: "link",
      color: "warning",
      class: {
        root: "text-amber-600",
      },
    },
  ],
});

export default button;
