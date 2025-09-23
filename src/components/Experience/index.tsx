
import { TitleSection, WrapperSection } from "../Profile/styled";

import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  return (
    <WrapperSection>
      <TitleSection>{t("experienceTitle")}</TitleSection>

      <TitleSection>{t("experiencePartNow")}</TitleSection>

    </WrapperSection>
  );
}

export default Experience;
