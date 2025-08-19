import { useTranslation } from "react-i18next";
import styles from "./styles.module.css"

const Project =()=>{
    const {t} = useTranslation()
    return(
        <section className={styles.projectcontainer}>
               <div className={styles.projectCard}>
                    <span className={styles.title}> {t('detailsUpdateAbout')}</span>
                    <span className={styles.paraText}>{t("projectSectionPara1")}</span>
                    <span className={styles.paraText}>{t("projectSectionPara2")}</span>
               </div>
        </section>
    )
}

export default Project;