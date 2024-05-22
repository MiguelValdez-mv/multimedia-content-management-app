import { Col } from "../Col";
import { Spinner } from "../../atoms/Spinner";
import { twMerge } from "../../../utils/twMerge";

export function Content({ isLoading, className, children }) {
  return (
    <Col
      className={twMerge(
        " w-full self-center",
        isLoading && "h-full justify-center items-center",
        className
      )}
    >
      {isLoading ? <Spinner primary /> : children}
    </Col>
  );
}
