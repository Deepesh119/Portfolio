import styles from "./style.module.css";
import profileImage from "../../assets/Deepesh.jpeg"
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import Experience from "../../Components/PreviousExperience/Experience";
import Techstck from "../../Components/TechStack/TechStack";
import TechStackArray from "./techImage";
import Corecard from "../../Components/Cardvalues/Corecard";

const About =()=>{
  const [showLines, setShowLines] = useState<number[]>([]);
  const {t} = useTranslation()


 const CoreConcept =[
  {
    id:1,
    title:t('firstCore1T'),
    desc:t('firstCore1D')
  },
  {
    id:2,
    title:t('firstCore2T'),
    desc:t('firstCore2D')
  },
  {  
    id:3,
    title:t('firstCore3T'),
    desc:t('firstCore3D')
  }
 ]


    const lines = [
    t("myDetails.myabout1"),
    t("myDetails.myabout2"),
    t("myDetails.myabout3")
  ];

   useEffect(() => {
    lines.forEach((_, index) => {
      setTimeout(() => {
        setShowLines(prev => [...prev, index]);
      }, index * 500);
    });
  }, []);



  return(
    <>
    <section className={styles.section}>
      <span aria-label="About Deepesh" className={styles.headingAbout}>{t("Professional").toLocaleUpperCase()}</span>
      <aside>
        <img 
          src={profileImage} 
          alt="Deepesh Image" 
          className={styles.profileImg} 
          aria-label="Profile Image"
        />

      </aside>
      <article className={styles.articleContent}>
        {lines.map((line, index) => (
        <span
          key={index}
          className={styles.articlePara1 + " " + (showLines.includes(index) ? styles.fadeInLine : "")}
        >
          {line}
        </span>
      ))}
      </article>
    </section>
     <Experience/>
    <span className={styles.techStackTitle}>{t('techStack').toLocaleUpperCase()}</span>
     <div className={styles.mainTechContainer}>
        <div className={styles.techstackContainer}>
        {
          TechStackArray?.map((val)=>{
            return (
                  <Techstck  src={val?.img} alternative={val?.alt} id={val?.id} key={val?.id}/>
            )
          })
        }
        </div>
        <span className={styles.CoreValueTitle}>{t("CoreValue")}</span>
        <div className={styles.coreValueCont}>
            {
              CoreConcept?.map((val)=>{
                return (
                  <Corecard Values={val?.title} Description={val?.desc} id={val?.id}/>
                )
              })
            }
        </div>
     </div>
    </>
  )
}

export default About
