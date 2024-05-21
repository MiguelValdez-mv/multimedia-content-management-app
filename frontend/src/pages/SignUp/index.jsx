import { Formik } from "formik";

import { Page } from "../../components/layout/Page";
import { Surface } from "../../components/layout/Surface";
import { Text } from "../../components/atoms/Text";
import { TextInput } from "../../components/atoms/TextInput";
import { Button } from "../../components/atoms/Button";
import { Form } from "../../components/atoms/Form";
import { FORM_SCHEMES, USER_ROLES } from "../../constants";
import { COPY } from "../../copy";
import useActions from "./useActions";

function SignUp() {
  const { signUp, goToLoginPage } = useActions();

  return (
    <Page className="h-screen justify-center items-center">
      <Surface className="gap-10 items-center">
        <Text caption bold>
          {COPY["signUp.title"]}
        </Text>

        <Formik
          initialValues={{
            email: "",
            username: "",
            role: USER_ROLES.CREATOR,
            password: "",
          }}
          validationSchema={FORM_SCHEMES.SIGN_UP}
          onSubmit={signUp}
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
                placeholder={COPY["signUp.placeholder.email"]}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
              />

              <TextInput
                id="username"
                placeholder={COPY["signUp.placeholder.username"]}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && errors.username}
              />

              <TextInput
                id="password"
                type="password"
                placeholder={COPY["signUp.placeholder.password"]}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password}
              />

              <Button type="submit">{COPY["signUp.cta"]}</Button>

              <Button variant="outline" onClick={goToLoginPage}>
                {COPY["signUp.login"]}
              </Button>
            </Form>
          )}
        </Formik>
      </Surface>
    </Page>
  );
}

export default SignUp;
