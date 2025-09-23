import { Description, TitleSection, WrapperSection } from "../Profile/styled";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <WrapperSection>
      <TitleSection>{t("skillsTitle")}</TitleSection>
      <Description $flex="flex" $gap="8px" $margin="10px 0 0 0">
       HTML, CSS, JavaScript, TypeScript, React, Redux
      </Description>
      <Description $flex="flex" $gap="8px">
        Firebase, Node, Express
      </Description>
      <Description $flex="flex" $gap="8px">
        GIT, GitHub
      </Description>
      <Description $flex="flex" $gap="8px">
        {t('skillsAPI')}, GraphQL
      </Description>
      <Description $flex="flex" $gap="8px">
        WordPress
      </Description>
      <Description $flex="flex" $gap="8px">
        {t('skillsBD')}
      </Description>
      <Description $flex="flex" $gap="8px">
        {t('skillsAdaptive')}
      </Description>
    </WrapperSection>
  );
}

export default Skills;
