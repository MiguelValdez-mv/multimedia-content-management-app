import { format } from "date-fns";

import { Surface } from "../../../layout/Surface";
import { Col } from "../../../layout/Col";
import { Text } from "../../../atoms/Text";
import { Image } from "../../../atoms/Image";
import { COPY } from "../../../../copy";
import { Button } from "../../../atoms/Button";
import { useAuth } from "../../../../hooks/auth/useAuth";
import { isAdminUser } from "../../../../utils/checkUserRole";

export function ThematicListItem({ thematic, deleteThematic }) {
  const { user } = useAuth();

  const { name, coverImage, createdAt } = thematic;

  return (
    <Surface className="sm:flex-row sm:justify-between sm:items-center gap-4">
      <Col className="sm:flex-row gap-4">
        <Col className="sm:justify-center sm:order-1">
          <Text title>{name}</Text>

          <Text tiny muted>
            {COPY["thematicListItem.createdAt"]}:{" "}
            {format(new Date(createdAt), "dd/MM/yyyy")}
          </Text>
        </Col>

        <Image
          className="w-32 h-32"
          wrapperClassName="max-sm:self-center"
          src={coverImage}
        />
      </Col>

      {isAdminUser(user) && (
        <Button variant="outline-primary" onClick={deleteThematic}>
          {COPY["thematicListItem.delete"]}
        </Button>
      )}
    </Surface>
  );
}
