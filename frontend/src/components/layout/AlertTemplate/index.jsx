import { Row } from "../Row";
import { Surface } from "../Surface";
import { Text } from "../../atoms/Text";
import { IconButton } from "../../atoms/IconButton";
import { IconInfoCircle } from "../../../assets/svgs/IconInfoCircle";
import { IconCheckCircle } from "../../../assets/svgs/IconCheckCircle";
import { IconBxErrorCircle } from "../../../assets/svgs/IconBxErrorCircle";
import { IconClose } from "../../../assets/svgs/IconClose";

export function AlertTemplate({ options, message, close }) {
  const iconRender = () => {
    switch (options.type) {
      case "info":
        return <IconInfoCircle className="text-info" />;
      case "success":
        return <IconCheckCircle className="text-success" />;
      case "error":
        return <IconBxErrorCircle className="text-error" />;
      default:
        return null;
    }
  };

  return (
    <Surface className="flex-row m-2 pointer-events-auto gap-4">
      <Row className="gap-2 items-center">
        {iconRender()}

        <Text bold small>
          {message}
        </Text>
      </Row>

      <IconButton className="self-start" onClick={close} muted>
        <IconClose className="w-auto h-auto" />
      </IconButton>
    </Surface>
  );
}
