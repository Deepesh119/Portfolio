import { useState } from "react";
import styles from "./style.module.css";

type ProjectCardProps = {
  title: string;
  stack: string;
  description: string;
  onClick?: () => void;
};

const ProjectCard = ({ title, stack, description,onClick}: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.cardHover : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.stack}>{stack}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectCard;
