import { Text } from "../Text";
import { Label } from "../Label";
import { Col } from "../../layout/Col";
import { Row } from "../../layout/Row";
import { twMerge } from "../../../utils/twMerge";

export function TextInput({
  label,
  type = "text",
  id,
  error,
  startAdornment = null,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete = "off",
  disabled,
  endAdornment = null,
}) {
  return (
    <Col className="gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}

      <Row
        className={twMerge(
          "gap-4 border rounded-xl text-primary p-2 items-center bg-white",
          error
            ? "border-error"
            : "border-muted hover:border-primary focus-within:border-primary"
        )}
      >
        {startAdornment}

        <input
          className="w-full border-0 p-0 focus:outline-none"
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
        />

        {endAdornment}
      </Row>

      {error && <Text error>{error}</Text>}
    </Col>
  );
}
