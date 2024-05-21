import { twMerge } from "../../../utils/twMerge";
import { Spinner } from "../Spinner";

const baseStyles = {
  solid: "text-white bg-gradient-to-r from-primary to-secondary",
  outline: "border border-cyan text-cyan",
  "outline-primary": "border border-muted text-primary",
  ghost: "text-primary hover:text-white hover:bg-primary",
  surface: "bg-white text-primary drop-shadow-surface",
  none: "",
};

export function Button({
  variant = "solid",
  disabled,
  spacing,
  className,
  type = "button",
  onClick,
  isLoading,
  startIcon = null,
  children,
  endIcon = null,
}) {
  return (
    <button
      className={twMerge(
        "gap-2 flex justify-center items-center rounded-xl font-bold p-2 outline-none active:drop-shadow-surface",
        baseStyles[variant],
        disabled && "opacity-25",
        spacing && "px-8",
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {(isLoading || startIcon) && (isLoading ? <Spinner /> : startIcon)}

      {children}

      {endIcon}
    </button>
  );
}
