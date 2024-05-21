import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  theme: {
    colors: [
      "primary",
      "secondary",
      "tertiary",
      "muted",
      "cyan",
      "info",
      "success",
      "error",
    ],
  },
  classGroups: {
    "font-size": [{ text: ["tiny", "small", "subtitle", "title", "caption"] }],
    "drop-shadow": [{ "drop-shadow": ["surface"] }],
  },
});
