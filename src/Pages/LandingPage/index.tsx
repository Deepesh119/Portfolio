import { useTranslation } from "react-i18next";
import styles from "./index.module.css";
import ButtonView from "../../Components/Button1/Button";
import Terminal from "../../Components/Terminal";
import useLanding from "./uselandingPage.hook";
import Corecard from "../../Components/Cardvalues/Corecard";

const LandingPage = () => {

  const { handleNavigate } = useLanding();
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('workedproject1'),
      desc: t('workedproject11')
    },
    {
      id: 2,
      title: t('workedproject2'),
      desc: t('workedproject21')
    },
    {
      id: 3,
      title: t('workedproject3'),
      desc: t('workedproject31')
    }
  ]


  return (
    <main className={styles.mainContainer} aria-label="Description About the Developer">
      <section className={styles.section}>
        <div className={styles.introSection}>
          <span className={styles.intro}>{t('intro')}</span>
          <span className={styles.intro2}>{t('intro2')}</span>
          <span className={styles.intro3}>{t('intro3')}</span>
          <span className={styles.intro}>{t('intro4')}</span>
          <ButtonView text={t('view_project')} onClick={() => handleNavigate()} />
        </div>
        <div>
          <Terminal />
        </div>
      </section>
      <div className={styles.featured}>{t('featuredProjects')}</div>
      <div className={styles.featureDetail}>{t("fetatureDetails")}</div>
      <div className={styles.projectCard}>
          {
              projects?.map((val)=>{
                return (
                  <Corecard Values={val?.title} Description={val?.desc} id={val?.id}/>
                )
              })
            }
      </div>
    </main>
  )
}

export default LandingPage