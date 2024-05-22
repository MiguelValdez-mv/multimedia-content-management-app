import { Row } from "../../layout/Row";
import { Label } from "../Label";
import { twMerge } from "../../../utils/twMerge";

export function Checkbox({ id, className, checked, onChange, onClick, label }) {
  return (
    <Row className="items-center gap-1">
      <input
        id={id}
        className={twMerge("w-4 h-4", className)}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onClick={onClick}
      />

      {label && <Label htmlFor={id}>{label}</Label>}
    </Row>
  );
}
