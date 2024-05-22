import RCImage from "rc-image";

import { twMerge } from "../../../utils/twMerge";

export function Image({ className, ...rest }) {
  return <RCImage className={twMerge("rounded-xl", className)} {...rest} />;
}
