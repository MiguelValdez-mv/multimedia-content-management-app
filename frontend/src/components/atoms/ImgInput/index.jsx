import { useRef, useState, useEffect } from "react";
import Image from "rc-image";

import { Label } from "../Label";
import { Button } from "../Button";
import { Col } from "../../layout/Col";
import { IconEdit } from "../../../assets/svgs/IconEdit";
import { COPY } from "../../../copy";

export function ImgInput({
  image,
  label,
  id,
  disabled,
  onChange,
  accept = ".jpg, .jpeg, .png",
  multiple,
}) {
  const inputRef = useRef();
  const [preview, setPreview] = useState("");

  const handleClick = () => inputRef.current?.click();

  useEffect(() => {
    if (typeof image === "object") {
      const objectUrl = URL.createObjectURL(image);
      console.log(objectUrl);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview(image);
  }, [image]);

  return (
    <Col className="gap-2">
      {label && <Label htmlFor={id}>{label}</Label>}

      <Col className="gap-2 items-center">
        {preview && <Image className="rounded-xl w-60 h-60" src={preview} />}

        {!disabled && (
          <Button startIcon={<IconEdit />} onClick={handleClick}>
            {COPY["imgInput.label.selectImage"]}
          </Button>
        )}
      </Col>

      <input
        ref={inputRef}
        className="hidden"
        type="file"
        id={id}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
      />
    </Col>
  );
}
