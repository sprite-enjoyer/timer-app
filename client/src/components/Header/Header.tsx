import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useContext, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { AuthStoreContext } from "../../AuthStoreProvider";

// TODO: display placeholder/real information inside account dropdown based on the user login status
const Header = () => {
  const [accountDropdownShown, setAccountDropdownShown] = useState(false);
  const accountButtonRef = useRef<HTMLButtonElement>(null);
  const authStore = useContext(AuthStoreContext);

  const handleToggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  const handleAccButtonClick = () => {
    setAccountDropdownShown((prev) => !prev);
  };

  const accDropdownOutsideClickAction = (event: MouseEvent) => {
    const target = event.target as Node;
    if (target.contains(accountButtonRef.current)) return;
    setAccountDropdownShown(false);
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Your Logo Goes Here</span>
      <div className={styles["button-group"]}>
        <button
          onClick={handleToggleTheme}
          className={styles["button-group__toggle-theme"]}
        >
          D/N
        </button>
        <button
          className={styles["button-group__account"]}
          onClick={handleAccButtonClick}
          ref={accountButtonRef}
        >
          acc
        </button>
        <button className={styles["button-group__stats"]}>stats</button>
        <Link to={"/settings"}>
          <button className={styles["button-group__settings"]}>prefp</button>
        </Link>
      </div>
      <Dropdown
        className={styles.dropdown}
        open={accountDropdownShown}
        outsideClickAction={accDropdownOutsideClickAction}
      >
        <div>dropdown open!!</div>
      </Dropdown>
    </div>
  );
};

export default Header;
