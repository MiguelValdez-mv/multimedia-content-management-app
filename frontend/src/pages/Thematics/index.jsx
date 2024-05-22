import { Page } from "../../components/layout/Page";
import { Content } from "../../components/layout/Content";
import { Text } from "../../components/atoms/Text";
import { Link } from "../../components/atoms/Link";
import { Button } from "../../components/atoms/Button";
import { ThematicList } from "../../components/app/thematics/ThematicList";
import { IconAdd } from "../../assets/svgs/IconAdd";
import { COPY } from "../../copy";
import useActions from "./useActions";

function Thematics() {
  const { isLoading, allowThematicCreation, thematics, deleteThematic } =
    useActions();

  return (
    <Page>
      <Content className="gap-2" isLoading={isLoading}>
        {allowThematicCreation && (
          <Link className="self-end" to="/tematicas/crear-tematica">
            <Button startIcon={<IconAdd />}>
              {COPY["thematics.creation.title"]}
            </Button>
          </Link>
        )}

        <Text title bold>
          {COPY["thematics.title"]}
        </Text>

        <ThematicList thematics={thematics} deleteThematic={deleteThematic} />
      </Content>
    </Page>
  );
}

export default Thematics;
