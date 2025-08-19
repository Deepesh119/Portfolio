import { useState } from "react";
import styles from "./style.module.css"


type propsValue ={
    Values?:string;
    Description?:string;
    id:any
}

const Corecard =({Values,Description,id}:propsValue)=>{
    const [hoverEle,setHoverEle] = useState(null)

    const handleMouseEnter=(id:any)=>{
        setHoverEle(id)
    }

    const handleMosueLeave =()=>{
      setHoverEle(null)
      console.log(id,hoverEle,"Hello12")
    }

    return(
        <div className={id === hoverEle ? styles.coreEleHover : styles.corecont} onMouseOver={()=>handleMouseEnter(id)} onMouseLeave={()=>handleMosueLeave()}>
           <div style={{display:"flex",justifyContent:"center"}} className={styles.title}>{Values}</div>
           <span className={styles.description}>{Description}</span>
        </div>
    )
}

export default Corecard;