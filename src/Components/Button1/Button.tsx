import Button from '@mui/material/Button';
import styles from "./index.module.css";

type ButtonViewProps = {
  text: string;
  onClick?: () => any; 
};

const  ButtonView=({text,onClick}:ButtonViewProps)=> {
  return (
       <Button
        sx={{
          border: "1px solid white",
          width: "200px",
          height: "60px",
          backgroundColor: "#000",
          color: "white",
          "&:hover": {
            backgroundColor: "#000",
            color: "white",         
          },
          "&:active": {
            backgroundColor: "#000", 
            color: "white",
          },
        }}
        variant="outlined"
        onClick={onClick}
    >
      <span style={{color:"white"}} className={styles.textColor}>{text}</span>
    </Button>
  );
}

export default  ButtonView