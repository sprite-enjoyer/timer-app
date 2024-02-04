import { ReactNode, useRef } from "react";
import useOutsideClickHandler from "../../common/hooks/useOutsideClickAlert";

export interface DropdownProps {
  open: boolean;
  className: string;
  children: ReactNode;
  outsideClickAction: (event: MouseEvent) => void;
}

const Dropdown = ({
  open,
  className,
  children,
  outsideClickAction,
}: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClickHandler(ref, outsideClickAction);

  if (!open) return null;
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Dropdown;
