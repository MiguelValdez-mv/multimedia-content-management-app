import { twMerge } from "../../../utils/twMerge";

export function Form({ className, onSubmit, children }) {
  return (
    <form className={twMerge("flex flex-col", className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
