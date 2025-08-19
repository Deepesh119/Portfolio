import { ReactTerminal } from "react-terminal";
import styles from "./style.module.css"

export default function Terminal() {
  const commands = {
    whoami: "Deepesh",
    hello: () => "Hello world!"
  };

  return (
    <div className={styles.container}>
      <ReactTerminal
        commands={commands}
        theme="material-dark"
        welcomeMessage={"hello I am Deepesh thanks for viewing my profile"}
      />
    </div>
  );
}