import { Col } from "../Col";
import { Spinner } from "../../atoms/Spinner";

export function Loader() {
  return (
    <Col className="w-screen h-screen justify-center items-center">
      <Spinner primary />
    </Col>
  );
}
