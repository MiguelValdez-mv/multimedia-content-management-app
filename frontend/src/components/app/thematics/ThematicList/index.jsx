import { ThematicListItem } from "../ThematicListItem";
import { Col } from "../../../layout/Col";

export function ThematicList({ thematics }) {
  return (
    <Col className="gap-2">
      {thematics.map((t) => (
        <ThematicListItem thematic={t} />
      ))}
    </Col>
  );
}
