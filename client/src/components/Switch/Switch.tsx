import styles from "./Switch.module.scss";

export interface SwitchProps {
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

const Switch = ({ inputProps }: SwitchProps) => {
  return (
    <label className={styles.label}>
      <input
        {...inputProps}
        type="checkbox"
        className={styles.input}
      />
      <span className={styles.slider} />
    </label>
  );
};

export default Switch;
