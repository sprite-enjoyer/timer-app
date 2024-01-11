import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const handleToggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Your Logo Goes Here</span>
      <div className={styles["button-group"]}>
        <button
          onClick={handleToggleTheme}
          className={styles["button-group__toggle-theme"]}>
          D/N
        </button>
        <button className={styles["button-group__account"]}>acc</button>
        <button className={styles["button-group__stats"]}>stats</button>
        <Link to={"/settings"}>
          <button className={styles["button-group__settings"]}>prefp</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
