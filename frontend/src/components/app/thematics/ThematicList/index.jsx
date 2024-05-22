import { ThematicListItem } from "../ThematicListItem";
import { Col } from "../../../layout/Col";
import { NoDataYet } from "../../../molecules/NoDataYet";

export function ThematicList({ thematics }) {
  return (
    <Col className="gap-2">
      {thematics.length ? (
        thematics.map((t) => <ThematicListItem thematic={t} />)
      ) : (
        <NoDataYet />
      )}
    </Col>
  );
}
