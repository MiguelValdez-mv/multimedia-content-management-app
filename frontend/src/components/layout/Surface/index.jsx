import { Col } from "../Col";

import { twMerge } from "../../../utils/twMerge";

export function Surface({ className, children, ...rest }) {
  return (
    <Col
      className={twMerge(
        "bg-white rounded-xl drop-shadow-surface p-4",
        className
      )}
      {...rest}
    >
      {children}
    </Col>
  );
}
