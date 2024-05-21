import { Button } from "../../../atoms/Button";

export function MenuOption({ onClick, close, children, ...rest }) {
  const handleClickMenuOpt = () => {
    onClick?.();
    close?.();
  };

  return (
    <Button
      onClick={handleClickMenuOpt}
      className="p-3 justify-start"
      variant="ghost"
      {...rest}
    >
      {children}
    </Button>
  );
}
