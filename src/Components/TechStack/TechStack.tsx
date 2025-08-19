import { useState } from "react";
import styles from "./style.module.css"


type TechstckProps = {
  src: string;
  alternative: string; 
  id?:any
};



const Techstck =({src,alternative,id}:TechstckProps)=>{
    const [unique,setUnique] = useState(null)

    const handleFocusIcon =(id:any)=>{
     setUnique(id)   
    }

    const handleRemoveFocus=()=>{
        setUnique(null)
    }

    return (
        <div className={styles.conatiner}>
            <img src={src} alt={alternative} className={id === unique ? styles.hoverElement : styles.element} id={id} onMouseEnter={()=>handleFocusIcon(id)} onMouseLeave={()=>handleRemoveFocus()}/>
        </div>
    )
}

export default Techstck;
