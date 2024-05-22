import { Formik } from "formik";

import { Form } from "../../../atoms/Form";
import { TextInput } from "../../../atoms/TextInput";
import { ImgInput } from "../../../atoms/ImgInput";
import { COPY } from "../../../../copy";

export function ThematicForm({
  action = "create",
  initialValues,
  validationSchema,
  onSubmit,
  isLoading,
}) {
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
        dirty,
      }) => (
        <Form className="gap-2">
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
        </Form>
      )}
    </Formik>
  );
}
