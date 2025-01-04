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
      "rounded",
      "whitespace-nowrap",
      "font-medium",
      "items-center",
      "justify-center",
      "cursor-pointer",
      "active:opacity-90",
      "tap-highlight-transparent",
      "border-2",
      "border-transparent",
      "bg-transparent",
      "group",
      "gap-1",
      "font-semibold",
      "h-8",
      "px-3",
      "text-base",
      "gap-x-1",
    ],
  },
  defaultVariants: {
    surface: "solid",
    color: "neutral",
    size: "default",
    fullWidth: false,
    disabled: false,
    focus: false,
  },
  variants: {
    surface: {
      solid: {
        root: [
          "bg-neutral-800",
          "text-neutral-50",
          "hover:bg-neutral-800/90",
          "focus:ring-2",
          "focus:ring-neutral-800",
          "focus:ring-offset-2",
        ],
      },
      outline: {
        root: [
          "border-neutral-400",
          "bg-transparent",
          "text-neutral-600",
          "hover:bg-neutral-100",
        ],
      },
      soft: {
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
      slate: [],
      gray: [],
      neutral: [],
      zinc: [],
      stone: [],
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
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-red-600", "hover:text-red-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-orange-600", "hover:text-orange-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-amber-600", "hover:text-amber-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-lime-600", "hover:text-lime-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-emerald-600", "hover:text-emerald-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-teal-600", "hover:text-teal-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-cyan-600", "hover:text-cyan-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-sky-600", "hover:text-sky-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-blue-600", "hover:text-blue-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-indigo-600", "hover:text-indigo-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-violet-600", "hover:text-violet-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-purple-600", "hover:text-purple-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-fuchsia-600", "hover:text-fuchsia-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-pink-600", "hover:text-pink-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-rose-600", "hover:text-rose-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-yellow-600", "hover:text-yellow-700"],
      },
    },
    {
      surface: "solid",
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
      surface: "soft",
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
        root: ["text-green-600", "hover:text-green-700"],
      },
    },
    {
      surface: "solid",
      color: "slate",
      class: {
        root: [
          "bg-slate-600",
          "text-white",
          "hover:bg-slate-600/90",
          "focus:ring-slate-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "slate",
      class: {
        root: ["border-slate-500", "text-slate-600", "hover:bg-slate-50"],
      },
    },
    {
      surface: "soft",
      color: "slate",
      class: {
        root: ["bg-slate-100", "text-slate-700", "hover:bg-slate-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "slate",
      class: {
        root: ["text-slate-600", "hover:bg-slate-50"],
      },
    },
    {
      surface: "link",
      color: "slate",
      class: {
        root: ["text-slate-600", "hover:text-slate-700"],
      },
    },
    {
      surface: "solid",
      color: "gray",
      class: {
        root: [
          "bg-gray-600",
          "text-white",
          "hover:bg-gray-600/90",
          "focus:ring-gray-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "gray",
      class: {
        root: ["border-gray-500", "text-gray-600", "hover:bg-gray-50"],
      },
    },
    {
      surface: "soft",
      color: "gray",
      class: {
        root: ["bg-gray-100", "text-gray-700", "hover:bg-gray-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "gray",
      class: {
        root: ["text-gray-600", "hover:bg-gray-50"],
      },
    },
    {
      surface: "link",
      color: "gray",
      class: {
        root: ["text-gray-600", "hover:text-gray-700"],
      },
    },
    {
      surface: "solid",
      color: "neutral",
      class: {
        root: [
          "bg-neutral-800",
          "text-white",
          "hover:bg-neutral-800/90",
          "focus:ring-neutral-800",
        ],
      },
    },
    {
      surface: "outline",
      color: "neutral",
      class: {
        root: ["border-neutral-500", "text-neutral-600", "hover:bg-neutral-50"],
      },
    },
    {
      surface: "soft",
      color: "neutral",
      class: {
        root: ["bg-neutral-100", "text-neutral-700", "hover:bg-neutral-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "neutral",
      class: {
        root: ["text-neutral-600", "hover:bg-neutral-50"],
      },
    },
    {
      surface: "link",
      color: "neutral",
      class: {
        root: ["text-neutral-600", "hover:text-neutral-700"],
      },
    },
    {
      surface: "solid",
      color: "zinc",
      class: {
        root: [
          "bg-zinc-600",
          "text-white",
          "hover:bg-zinc-600/90",
          "focus:ring-zinc-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "zinc",
      class: {
        root: ["border-zinc-500", "text-zinc-600", "hover:bg-zinc-50"],
      },
    },
    {
      surface: "soft",
      color: "zinc",
      class: {
        root: ["bg-zinc-100", "text-zinc-700", "hover:bg-zinc-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "zinc",
      class: {
        root: ["text-zinc-600", "hover:bg-zinc-50"],
      },
    },
    {
      surface: "link",
      color: "zinc",
      class: {
        root: ["text-zinc-600", "hover:text-zinc-700"],
      },
    },
    {
      surface: "solid",
      color: "stone",
      class: {
        root: [
          "bg-stone-600",
          "text-white",
          "hover:bg-stone-600/90",
          "focus:ring-stone-600",
        ],
      },
    },
    {
      surface: "outline",
      color: "stone",
      class: {
        root: ["border-stone-500", "text-stone-600", "hover:bg-stone-50"],
      },
    },
    {
      surface: "soft",
      color: "stone",
      class: {
        root: ["bg-stone-100", "text-stone-700", "hover:bg-stone-100/80"],
      },
    },
    {
      surface: "ghost",
      color: "stone",
      class: {
        root: ["text-stone-600", "hover:bg-stone-50"],
      },
    },
    {
      surface: "link",
      color: "stone",
      class: {
        root: ["text-stone-600", "hover:text-stone-700"],
      },
    },
  ],
});

export default button;
