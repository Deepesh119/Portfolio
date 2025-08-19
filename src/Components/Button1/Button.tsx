import styles from "./index.module.css";

type ButtonViewProps = {
  text: string;
  onClick?: () => any; 
};

const  ButtonView=({text,onClick}:ButtonViewProps)=> {
  return (
       <button
        className={styles.btnstyle}
        onClick={onClick}
    >
      {text}
    </button>
  );
}

export default  ButtonView
