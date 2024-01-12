import styles from "./SelectionGrid.module.scss";

export interface SelectionGridProps {
  titles: string[];
}

const SelectionGrid = ({ titles }: SelectionGridProps) => {
  return (
    <div className={styles.container}>
      {titles.map((title) => (
        <div
          className={styles["grid-item"]}
          key={title}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default SelectionGrid;
