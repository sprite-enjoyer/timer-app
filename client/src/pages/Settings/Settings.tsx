import Accordion from "../../components/Accordion/Accordion";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import styles from "./Settings.module.scss";
import Switch from "../../components/Switch/Switch";
import SelectionGrid from "../../components/SelectionGrid/SelectionGrid";
import Slider from "../../components/Slider/Slider";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

const Settings = () => {
  return (
    <div className={styles.container}>
      <Accordion>
        <AccordionItem title="Timer">
          <>
            <div className={styles["setting-standard"]}>
              <div>Session time</div>
              <input />
            </div>
            <div className={styles["setting-standard"]}>
              <div>Start timers automatically</div>
              <Switch inputProps={{}} />
            </div>
            <div className={styles["setting-vertical"]}>
              <div>Timer over sound</div>
              <SelectionGrid
                titles={[
                  "something1.ogg",
                  "something2.ogg",
                  "something3.ogg",
                  "something4.ogg",
                  "something5.ogg",
                  "something6.ogg",
                  "something7.ogg",
                  "something8.ogg",
                ]}
              />
            </div>
            <div className={styles["setting-standard"]}>
              <div>Timer sound volume</div>
              <Slider />
            </div>
          </>
        </AccordionItem>
        <AccordionItem title="Theme">
          <>
            <div className={styles["setting-standard"]}>
              <div>Start timers automatically</div>
              <input />
            </div>
            <div className={styles["setting-vertical"]}>
              <div>Application theme</div>
              <SelectionGrid
                titles={["Default", "Theme2", "Theme3", "Theme4", "Theme5", "Theme6", "Theme7", "Theme8"]}
              />
            </div>
            <div className={styles["setting-standard"]}>
              <div>Main color</div>
              <ColorPicker />
            </div>
            <div className={styles["setting-standard"]}>
              <div>Secondary color</div>
              <ColorPicker />
            </div>
            <div className={styles["setting-standard"]}>
              <div>Accent color</div>
              <ColorPicker />
            </div>
            <div className={styles["setting-standard"]}>
              <div>Text color</div>
              <ColorPicker />
            </div>
            <button>Reset Settings</button>
          </>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Settings;
