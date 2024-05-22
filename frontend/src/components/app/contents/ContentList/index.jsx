import { Col } from "../../../layout/Col";
import { NoDataYet } from "../../../molecules/NoDataYet";
import { ContentListItem } from "../ContentListItem";

export function ContentList({ contents }) {
  return (
    <Col className="gap-2">
      {contents.length ? (
        contents.map((c) => <ContentListItem content={c} />)
      ) : (
        <NoDataYet />
      )}
    </Col>
  );
}
