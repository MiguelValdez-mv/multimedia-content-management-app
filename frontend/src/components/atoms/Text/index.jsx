import { twMerge } from "../../../utils/twMerge";

export function Text({
  muted,
  white,
  error,
  center,
  end,
  semibold,
  bold,
  italic,
  lowercase,
  uppercase,
  capitalize,
  tiny,
  small,
  subtitle,
  title,
  caption,
  truncate,
  className,
  children,
}) {
  return (
    <span
      className={twMerge(
        "text-primary",
        muted && "text-muted",
        white && "text-white",
        error && "text-error",
        center && "text-center",
        end && "text-end",
        semibold && "font-semibold",
        bold && "font-bold",
        italic && "italic",
        lowercase && "lowercase",
        uppercase && "uppercase",
        capitalize && "first-letter:capitalize",
        tiny && "text-tiny",
        small && "text-small",
        subtitle && "text-subtitle",
        title && "text-title",
        caption && "text-caption",
        truncate && "truncate",
        className
      )}
    >
      {children}
    </span>
  );
}
