import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

const Updates =()=>{

    const {t} = useTranslation();

    return(
        <div style={{display:"flex",justifyContent:"center"}}>
              <div className={styles.disclaimer}>
                  <span className={styles.title}>{t('disclaimer')}</span>
                  <span className={styles.des}>{t('disclaimer1t')}</span>
                  <span className={styles.des}>{t('disclaimer2t')}</span>
                  <span className={styles.des}>{t('disclaimer3t')}</span>
                  <span className={styles.des}>{t('disclaimer4t')}</span>
              </div>
        </div>
    )
}

export default Updates;