import { Page } from "../../components/layout/Page";
import { Content } from "../../components/layout/Content";
import { Text } from "../../components/atoms/Text";
import { Link } from "../../components/atoms/Link";
import { Button } from "../../components/atoms/Button";
import { ContentList } from "../../components/app/contents/ContentList";
import { IconAdd } from "../../assets/svgs/IconAdd";
import { COPY } from "../../copy";
import useActions from "./useActions";

function Contents() {
  const { isLoading, allowContentCreation, contents } = useActions();

  return (
    <Page>
      <Content className="gap-2" isLoading={isLoading}>
        {allowContentCreation && (
          <Link className="self-end" to="/contenidos/crear-contenido">
            <Button startIcon={<IconAdd />}>
              {COPY["contenido.creation.title"]}
            </Button>
          </Link>
        )}

        <Text title bold>
          {COPY["contents.title"]}
        </Text>

        <ContentList contents={contents} />
      </Content>
    </Page>
  );
}

export default Contents;
