import { useState } from "react";
import styles from "./style.module.css";

type propsData ={
    startTime:string;
    endTime:string;
    companyName?:string;
    Role?:string;
    id:any
}

const ExperienceCard =({startTime,endTime,companyName,Role,id}:propsData)=>{
    const [hoverEle,setHoverEle]= useState(null);

    const onMouseHovercard =(id:any)=>{
      setHoverEle(id)
    }

    const onMouseHoveLeaveCard =()=>{
        setHoverEle(null)
    }

    return(
        <div className={id === hoverEle ? styles.cardConatinerHover:styles.cardContainer} key={id} onMouseEnter={()=>onMouseHovercard(id)} onMouseLeave={()=>onMouseHoveLeaveCard()}>
            <span className={styles.timePeriod}>{startTime}{" "}-{" "}{endTime}</span>
            <span className={styles.companyText}>{companyName}</span>
            <span className={styles.companyRole}>{Role}</span>
        </div>
    )
}

export default ExperienceCard;