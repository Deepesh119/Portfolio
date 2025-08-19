import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css"
import Logo from "../../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const { t } = useTranslation();
    const navigation = useNavigate()

    const renderText =(value:string)=>{
        return t(value).toUpperCase()
    }

    const handleNavigate =(value: string)=>{
        navigation(value)
    }

    return (
        <header className={styles.header} aria-label="Top Navigation Bar">
            <Link to="/"><img src={Logo} style={{height:"50px",width:"50px",borderRadius:"24px"}} className="" alt="Name Logo"/></Link>
            <div className={styles.main} style={{ gap: "10px" }}>
                <li className={styles.about} aria-label="about" onClick={()=>handleNavigate('about')}>{renderText('about')}</li>
                <li className={styles.project} aria-label="project" onClick={()=>handleNavigate('projects')}>{renderText('project')}</li>
                <li className={styles.contact} aria-label="contact" onClick={()=>handleNavigate('contact')}>{renderText('contact')}</li>
                <li className={styles.contact} aria-label="updates" onClick={()=>handleNavigate('updates')}>{renderText('Updates')}</li>
            </div>
            <LanguageSelector />
        </header>
    )
}

export default Navbar;