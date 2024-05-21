import { Col } from "../Col";
import { twMerge } from "../../../utils/twMerge";

export function Page({ className, children }) {
  return (
    <Col className={twMerge("w-full h-screen overflow-y-auto p-5", className)}>
      {children}
    </Col>
  );
}
