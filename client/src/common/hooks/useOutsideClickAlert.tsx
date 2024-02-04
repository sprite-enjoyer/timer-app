import { RefObject, useEffect } from "react";

function useOutsideClickHandler(
  ref: RefObject<HTMLElement>,
  outsideClickAction: (event: MouseEvent) => void
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !event.target ||
        !ref.current ||
        ref.current.contains(event.target as Node)
      )
        return;
      outsideClickAction(event);
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [ref, outsideClickAction]);
}

export default useOutsideClickHandler;
