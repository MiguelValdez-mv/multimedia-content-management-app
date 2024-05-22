import { Link, useLocation, useNavigate } from "react-router-dom";

import { Text } from "../../atoms/Text";
import { Button } from "../../atoms/Button";
import { Surface } from "../Surface";
import { Col } from "../Col";
import { Row } from "../Row";
import { useAuth } from "../../../hooks/useAuth";
import { IconLogout } from "../../../assets/svgs/IconLogout";
import { COPY } from "../../../copy";
import { removeAuthToken } from "../../../utils/authToken";

export function Header() {
  const { user, ...auth } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [, pathnameBase] = pathname.split("/");

  const logout = () => {
    auth.logout();
    removeAuthToken();
    navigate("/login");
  };

  return (
    <Surface className="flex-row max-sm:flex-col justify-between items-center gap-5">
      <Row className="gap-5 max-sm:justify-between w-full">
        <Button variant="outline" startIcon={<IconLogout />} onClick={logout} />

        <Col>
          <Text>{user.username}</Text>
          <Text muted>{user.email}</Text>
        </Col>
      </Row>

      <Row className="gap-5  ">
        <Link to="/tematicas">
          <Text bold={pathnameBase === "tematicas"}>
            {COPY["header.thematics"]}
          </Text>
        </Link>

        <Link to="/contenidos">
          <Text bold={pathnameBase === "contenidos"}>
            {COPY["header.contents"]}
          </Text>
        </Link>
      </Row>
    </Surface>
  );
}
