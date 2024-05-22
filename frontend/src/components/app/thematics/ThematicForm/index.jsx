import { Formik } from "formik";

import { Form } from "../../../atoms/Form";
import { TextInput } from "../../../atoms/TextInput";
import { ImgInput } from "../../../atoms/ImgInput";
import { Button } from "../../../atoms/Button";
import { COPY } from "../../../../copy";

export function ThematicForm({
  action = "create",
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
}) {
  const createThematic = action === "create";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <Form className="gap-4" onSubmit={handleSubmit}>
          <TextInput
            id="name"
            label={COPY["thematicForm.label.name"]}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
          />

          <ImgInput
            id="coverImage"
            label={COPY["thematicForm.label.coverImage"]}
            image={values.coverImage}
            onChange={(e) =>
              setFieldValue("coverImage", e.currentTarget.files[0] ?? "")
            }
          />

          <Button className="sm:self-end" type="submit" spacing>
            {COPY[`thematicForm.${createThematic ? "add" : "update"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
