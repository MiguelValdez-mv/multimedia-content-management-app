import { Checkbox } from "../../../atoms/Checkbox";

export function ContentTypeInput({
  contentType,
  values,
  setFieldValue,
  ...rest
}) {
  const { contentTypes } = values;

  const onChange = (e) => {
    const newArr = e.target.checked
      ? [...contentTypes, contentType]
      : values.contentTypes.filter((c) => c !== contentType);

    setFieldValue("contentTypes", newArr);
  };

  return (
    <Checkbox
      checked={contentTypes.includes(contentType)}
      onChange={onChange}
      {...rest}
    />
  );
}
