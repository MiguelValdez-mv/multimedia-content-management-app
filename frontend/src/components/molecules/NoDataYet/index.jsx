import { Col } from "../../layout/Col";
import { Text } from "../../atoms/Text";
import { twMerge } from "../../../utils/twMerge";
import { COPY } from "../../../copy";
import { IconDocumentList } from "../../../assets/svgs/IconDocumentList";

export function NoDataYet({
  className,
  icon,
  defaultIconClassName,
  msg = COPY.noDataYet,
}) {
  return (
    <Col className={twMerge("justify-center items-center gap-1", className)}>
      {icon ?? (
        <IconDocumentList
          className={twMerge("text-muted w-24 h-24", defaultIconClassName)}
        />
      )}

      <Text bold truncate>
        {msg}
      </Text>
    </Col>
  );
}
