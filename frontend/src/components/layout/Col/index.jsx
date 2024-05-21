import { Box } from "../../atoms/Box";
import { twMerge } from "../../../utils/twMerge";

export function Col({ className, children, ...rest }) {
  return (
    <Box className={twMerge("flex flex-col", className)} {...rest}>
      {children}
    </Box>
  );
}
