import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Index.module.css"
import Globe from "../../assets/Globe.jpg"

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const handleChange = (e:any) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage); 
  };

  return (
   <div className={styles.parent}> 
    <div className={styles.container}>
    <select
      role="select"
      value={language}
      onChange={handleChange}
      className={styles.select}
      name="DropDown Language Selector"
    >
      <option value="en" >ENGLISH</option>
      <option value="fr">FRENCH</option>
      <option value="de">GERMAN</option>
    </select>
   </div> 
    <img src={Globe} alt="Language" className={styles.languageIcon}/>
  </div> 
  );
};

export default LanguageSelector;

