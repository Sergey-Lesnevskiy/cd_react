import {
  SubTitleSection,
  TitleSection,
  WrapperSection,
} from "../Profile/styled";

import { useTranslation } from "react-i18next";
import Project from "./Project";

function Projects() {
  const { t } = useTranslation();
  const projectsNow = t("projectsNow", { returnObjects: true }) as {
    id: number;
    title: string;
    link: string;
    technologies: string[];
    tasks: string[];
  }[];
  const projectsLab = t("projectsLab", { returnObjects: true }) as {
    id: number;
    title: string;
    link: string;
    technologies: string[];
    tasks: string[];
  }[];
  const projectsFreelance = t("projectsFreelance", { returnObjects: true }) as {
    id: number;
    title: string;
    link: string;
    technologies: string[];
    tasks: string[];
  }[];
  return (
    <WrapperSection>
      <TitleSection>{t("experienceTitle")}</TitleSection>

      <SubTitleSection>{t("experiencePartNow")}</SubTitleSection>
      {projectsNow.map((p) => (
        <Project project={p} />
      ))}
      <SubTitleSection>{t("experiencePartLab")}</SubTitleSection>
      {projectsLab.map((p) => (
        <Project project={p} />
      ))}
      <SubTitleSection>{t("experiencePartFreelance")}</SubTitleSection>
      {projectsFreelance.map((p) => (
        <Project project={p} />
      ))}
    </WrapperSection>
  );
}

export default Projects;
