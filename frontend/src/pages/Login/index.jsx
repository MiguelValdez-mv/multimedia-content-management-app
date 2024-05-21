import { Formik } from "formik";

import { Page } from "../../components/layout/Page";
import { Surface } from "../../components/layout/Surface";
import { Text } from "../../components/atoms/Text";
import { TextInput } from "../../components/atoms/TextInput";
import { Button } from "../../components/atoms/Button";
import { Form } from "../../components/atoms/Form";
import { FORM_SCHEMES } from "../../constants";
import { COPY } from "../../copy";
import useActions from "./useActions";

function Login(props) {
  const { signIn } = useActions(props);

  return (
    <Page className="h-screen justify-center items-center">
      <Surface className="gap-10 items-center">
        <Text caption bold>
          {COPY["login.welcome"]}
        </Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={FORM_SCHEMES.LOGIN}
          onSubmit={signIn}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form className="gap-4" onSubmit={handleSubmit}>
              <TextInput
                id="email"
                placeholder={COPY["login.placeholder.email"]}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />

              <TextInput
                id="password"
                type="password"
                placeholder={COPY["login.placeholder.password"]}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />

              <Button>{COPY["login.cta"]}</Button>

              <Button variant="outline">{COPY["login.signUp"]}</Button>
            </Form>
          )}
        </Formik>
      </Surface>
    </Page>
  );
}

export default Login;
