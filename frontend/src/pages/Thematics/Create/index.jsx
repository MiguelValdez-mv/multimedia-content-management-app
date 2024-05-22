import { Content } from "../../../components/layout/Content";
import { Page } from "../../../components/layout/Page";
import { Surface } from "../../../components/layout/Surface";
import { Text } from "../../../components/atoms/Text";
import { ThematicForm } from "../../../components/app/thematics/ThematicForm";
import { COPY } from "../../../copy";

function CreateThematic() {
  return (
    <Page>
      <Content>
        <Surface className="gap-4">
          <Text title bold>
            {COPY["createThematic.title"]}
          </Text>

          <ThematicForm initialValues={{ name: "", coverImage: "" }} />
        </Surface>
      </Content>
    </Page>
  );
}

export default CreateThematic;
