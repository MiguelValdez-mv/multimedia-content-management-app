import { Box } from "../../atoms/Box";
import { twMerge } from "../../../utils/twMerge";

export function Row({ className, children, ...rest }) {
  return (
    <Box className={twMerge("flex flex-row", className)} {...rest}>
      {children}
    </Box>
  );
}
