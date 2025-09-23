import { Description, TitleSection, WrapperSection } from "../Profile/styled";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();
  return (
    <WrapperSection>
      <TitleSection>{t("educationTitle")}</TitleSection>
      <Description $flex="flex" $gap="8px" $margin="10px 0 0 0">
        {t("educationBGAM")}
      </Description>
      <Description $flex="flex" $gap="8px">
        {t("educationSENLA")}
      </Description>
    </WrapperSection>
  );
}

export default Education;
