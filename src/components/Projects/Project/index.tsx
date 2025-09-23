import { ProjectTasks, ProjectTitle, WrapperProject } from "./styled";
import type { ProjectProps } from "../../../constants/interface";
import { Description } from "../../Profile/styled";
import { useTranslation } from "react-i18next";

const Project: React.FC<ProjectProps> = ({ project }) => {
    const { t } = useTranslation();
  return (
    <WrapperProject>
      <a href={project.link}>
        <ProjectTitle>{project.title}</ProjectTitle>
      </a>
      <ProjectTasks>
        {project.tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </ProjectTasks>
      <Description><b>{t('stack')}</b> {project.technologies.join(", ")}</Description>
    </WrapperProject>
  );
};

export default Project;
