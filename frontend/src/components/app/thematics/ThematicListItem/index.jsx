import { format } from "date-fns";

import { Surface } from "../../../layout/Surface";
import { Col } from "../../../layout/Col";
import { Text } from "../../../atoms/Text";
import { Image } from "../../../atoms/Image";

export function ThematicListItem({ thematic }) {
  const { name, coverImage, createdAt } = thematic;

  return (
    <Surface className="sm:flex-row justify-between items-center gap-4">
      <Col className="max-sm:self-start">
        <Text title>{name}</Text>

        <Text tiny muted>
          {format(new Date(createdAt), "dd/MM/yyyy")}
        </Text>
      </Col>

      <Image className="w-32 h-32" src={coverImage} />
    </Surface>
  );
}
