import { Surface } from "../../../layout/Surface";
import { Text } from "../../../atoms/Text";
import { Image } from "../../../atoms/Image";
import { CONTENT_TYPES } from "../../../../constants";

function RenderValueByType({ value, type }) {
  switch (type) {
    case CONTENT_TYPES.IMAGE:
      return <Image className="w-32 h-32" src={value} />;
    case CONTENT_TYPES.TEXT:
      return <Text>{value}</Text>;
    case CONTENT_TYPES.VIDEO_URL:
      return (
        <iframe
          className="h-96 max-sm:w-full max-sm:h-auto"
          src={value}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      );
    default:
      throw new Error(`Type ${type} is invalid`);
  }
}

export function ContentListItem({ content }) {
  const { name, value, type } = content;

  return (
    <Surface className="gap-4">
      <Text title>{name}</Text>

      <RenderValueByType value={value} type={type} />
    </Surface>
  );
}
