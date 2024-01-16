import { ReactElement } from "react";
import styles from "./Accordion.module.scss";

export interface AccordionProps {
  children: ReactElement[];
}

const Accordion = ({ children }: AccordionProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Accordion;
