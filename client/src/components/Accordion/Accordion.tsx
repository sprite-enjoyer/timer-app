import { ReactNode } from "react";
import styles from "./Accordion.module.scss";

export interface AccordionProps {
  children: ReactNode;
}

const Accordion = ({ children }: AccordionProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Accordion;
