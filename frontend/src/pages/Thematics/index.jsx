import { Page } from "../../components/layout/Page";
import { Content } from "../../components/layout/Content";
import { Text } from "../../components/atoms/Text";
import { Link } from "../../components/atoms/Link";
import { Button } from "../../components/atoms/Button";
import { IconAdd } from "../../assets/svgs/IconAdd";
import { COPY } from "../../copy";
import useActions from "./useActions";

function Thematics() {
  const { allowThematicCreation } = useActions();

  return (
    <Page>
      <Content>
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
      </Content>
    </Page>
  );
}

export default Thematics;
