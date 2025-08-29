import { useNavigate } from "react-router-dom";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const projectsList = Array.from({ length: 7 }).map((_, i) => ({
        title: t(`projectsDone.${i}.title`),
        stack: t(`projectsDone.${i}.type`) + " | " + t(`projectsDone.${i}.role`),
        description: t(`projectsDone.${i}.description`),
        url: t(`projectsDone.${i}.url`) || null, 
    }));

       const handleCardClick = (url: string | null) => {
        if (url) {
            window.open(url, "_blank"); 
        } else {
            navigate("/about"); 
        }
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {projectsList.map((project, index) => (
                    <ProjectCard
                        title={project.title}
                        stack={project.stack}
                        description={project.description}
                        onClick={() => handleCardClick(project.url)}
                    />
            ))}
        </div>
    );
};

export default ProjectsSection;
