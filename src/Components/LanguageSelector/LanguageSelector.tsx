import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Index.module.css"

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  const [theme, setTheme] = useState('dark')

  const handleChange = (e: any) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
 

  const handleChangeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    document.body.className = theme;
    localStorage.setItem("theme", theme);
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
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span style={{fontSize:"40px"}}onClick={handleChangeTheme}>{theme === "light" ? <>🌑</> :<>☀️</> }</span>
      </div>
    </div>
  );
};

export default LanguageSelector;


