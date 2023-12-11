import TimerBox from "../../components/TimerBox/TimerBox";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={`${styles.container} page`}>
      <TimerBox />
    </div>
  );
};

export default Main;
