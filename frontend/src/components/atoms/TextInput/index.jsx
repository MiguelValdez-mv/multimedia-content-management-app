import { useState } from "react";

import { Text } from "../Text";
import { Label } from "../Label";
import { IconButton } from "../IconButton";
import { Col } from "../../layout/Col";
import { Row } from "../../layout/Row";
import { twMerge } from "../../../utils/twMerge";
import { IconEye } from "../../../assets/svgs/IconEye";
import { IconEyeInvisible } from "../../../assets/svgs/IconEyeInvisible";

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
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

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
          type={type === "password" && passwordIsVisible ? "text" : type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
        />

        {type === "password" ? (
          <IconButton onClick={() => setPasswordIsVisible((prev) => !prev)}>
            {passwordIsVisible ? <IconEyeInvisible /> : <IconEye />}
          </IconButton>
        ) : (
          endAdornment
        )}
      </Row>

      {error && <Text error>{error}</Text>}
    </Col>
  );
}
