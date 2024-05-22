import { Formik } from "formik";

import { Form } from "../../../atoms/Form";
import { TextInput } from "../../../atoms/TextInput";
import { ImgInput } from "../../../atoms/ImgInput";
import { Label } from "../../../atoms/Label";
import { Button } from "../../../atoms/Button";
import { Text } from "../../../atoms/Text";
import { Row } from "../../../layout/Row";
import { Col } from "../../../layout/Col";
import { COPY } from "../../../../copy";
import { ContentTypeInput } from "../ContentTypeInput";
import { CONTENT_TYPES } from "../../../../constants";

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
        dirty,
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
            error={touched.coverImage && errors.coverImage}
          />

          <Col className="gap-2">
            <Label>{COPY["thematicForm.label.contentTypes"]}</Label>

            <Row className="gap-4">
              <ContentTypeInput
                id="text"
                label={COPY["thematicForm.label.contentTypes.text"]}
                contentType={CONTENT_TYPES.TEXT}
                values={values}
                setFieldValue={setFieldValue}
              />

              <ContentTypeInput
                id="videoUrl"
                label={COPY["thematicForm.label.contentTypes.videoUrl"]}
                contentType={CONTENT_TYPES.VIDEO_URL}
                values={values}
                setFieldValue={setFieldValue}
              />

              <ContentTypeInput
                id="image"
                label={COPY["thematicForm.label.contentTypes.image"]}
                contentType={CONTENT_TYPES.IMAGE}
                values={values}
                setFieldValue={setFieldValue}
              />
            </Row>

            {touched.contentTypes && !!errors.contentTypes && (
              <Text error>{errors.contentTypes}</Text>
            )}
          </Col>

          <Button
            className="sm:self-end"
            type="submit"
            isLoading={isLoading}
            disabled={createThematic ? isLoading : isLoading || !dirty}
            spacing
          >
            {COPY[`thematicForm.${createThematic ? "add" : "update"}`]}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
