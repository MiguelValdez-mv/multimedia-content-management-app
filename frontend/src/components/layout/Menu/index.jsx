import Popup from "reactjs-popup";

import { Surface } from "../Surface";

export function Menu({
  trigger,
  position = "bottom left",
  children,
  arrow = false,
  disabled = false,
}) {
  return (
    <Popup
      trigger={trigger}
      position={position}
      arrow={arrow}
      disabled={disabled}
    >
      {(close) => (
        <Surface className="max-h-60 p-0 overflow-x-auto">
          {typeof children === "function" ? children(close) : children}
        </Surface>
      )}
    </Popup>
  );
}

export { MenuOption } from "./MenuOption";
