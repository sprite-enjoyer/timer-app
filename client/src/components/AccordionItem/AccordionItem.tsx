import { ReactElement, useState } from "react";
import styles from "./AccordionItem.module.scss";

export interface AccordionItemProps {
  title: string;
  children: ReactElement;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [showContent, setShowContent] = useState(true);
  const handleClick = () => setShowContent((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles["title-box"]}>
        <button onClick={handleClick}>V</button>
        <span>{title}</span>
      </div>
      {showContent && children}
    </div>
  );
};

export default AccordionItem;
