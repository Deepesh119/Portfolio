import ExperienceCard from "../ExperienceCard/ExperienceCard";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";



const Experience =()=>{
 
   const {t} = useTranslation()

  const experienceArr = [
  {
    id:1,
    company: t('experience1.company'),
    role: t('experience1.role'),
    startDate: t('experience1.startDate'),
    endDate: t('experience1.endDate')
  },
  {
    id:2,
    company: t('experience2.company'),
    role: t('experience2.role'),
    startDate: t('experience2.startDate'),
    endDate: t('experience2.endDate')
  },
  {
    id:3,
    company: t('experience3.company'),
    role: t('experience3.role'),
    startDate: t('experience3.startDate'),
    endDate: t('experience3.endDate')
  },
  {
    id:4,
    company: t('experience4.company'),
    role: t('experience4.role'),
    startDate: t('experience4.startDate'),
    endDate: t('experience4.endDate')
  }
];


   return(
    <div className={styles.container}>
        <span className={styles.title}>{t('professionalExperience')}</span>
        <div className={styles.experiencebar}>
            {
                experienceArr?.map((val)=>{
                    return(
                      <ExperienceCard startTime={val?.startDate} endTime={val?.endDate} companyName={val?.company} Role={val?.role} id={val?.id}/>
                    )
                })
            }
        </div>
    </div>
   )
}

export default Experience;