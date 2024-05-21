import { twMerge } from "../../../utils/twMerge";

export function IconButton({
  muted,
  primary,
  hoverable = true,
  className,
  onClick,
  children,
}) {
  return (
    <button
      className={twMerge(
        muted && "text-muted",
        primary && "text-primary",
        hoverable && "hover:opacity-50",
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
