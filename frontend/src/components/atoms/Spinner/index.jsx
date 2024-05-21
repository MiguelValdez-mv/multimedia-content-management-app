import { IconSpinner } from "../../../assets/svgs/IconSpinner";
import { twMerge } from "../../../utils/twMerge";

export function Spinner({ primary, className, ...rest }) {
  return (
    <IconSpinner
      className={twMerge("animate-spin", primary && "text-primary", className)}
      {...rest}
    />
  );
}
