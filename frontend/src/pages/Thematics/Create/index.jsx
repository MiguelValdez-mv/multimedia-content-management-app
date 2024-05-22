import { Content } from "../../../components/layout/Content";
import { Page } from "../../../components/layout/Page";
import { Surface } from "../../../components/layout/Surface";
import { Text } from "../../../components/atoms/Text";
import { ThematicForm } from "../../../components/app/thematics/ThematicForm";
import { FORM_SCHEMES } from "../../../constants";
import { COPY } from "../../../copy";
import useActions from "./useActions";

function CreateThematic() {
  const { handleSubmit } = useActions();

  return (
    <Page>
      <Content>
        <Surface className="gap-4">
          <Text title bold>
            {COPY["createThematic.title"]}
          </Text>

          <ThematicForm
            initialValues={{ name: "", coverImage: "", contentTypes: [] }}
            validationSchema={FORM_SCHEMES.THEMATIC_CREATION}
            onSubmit={handleSubmit}
          />
        </Surface>
      </Content>
    </Page>
  );
}

export default CreateThematic;
