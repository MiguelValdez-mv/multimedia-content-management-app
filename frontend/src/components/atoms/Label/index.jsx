import { twMerge } from "../../../utils/twMerge";

export function Label({ className, htmlFor, children }) {
  return (
    <label
      className={twMerge("text-primary font-bold", className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
