import { Description, TitleSection, WrapperSection } from "../Profile/styled";
import { useTranslation } from "react-i18next";

function Certificate() {
  const { t } = useTranslation();
  return (
    <WrapperSection>
      <TitleSection>{t("certificateTitle")}</TitleSection>
      <Description $flex="flex" $gap="8px" $margin="10px 0 0 0">
        THE ROLLING SCOPES SCHOOL |
        <a href="https://app.rs.school/certificate/uw8ssqsq" target="_blank">
          NODEJS 2024 Q1 (NODEJS)
        </a>
      </Description>
      <Description $flex="flex" $gap="8px">
        THE ROLLING SCOPES SCHOOL |
        <a href="https://app.rs.school/certificate/wkzbg94e" target="_blank">
          REACT 2023 Q1 (React)
        </a>
      </Description>
      <Description $flex="flex" $gap="8px">
        THE ROLLING SCOPES SCHOOL |
        <a href="https://app.rs.school/certificate/wvb67tqy" target="_blank">
          JAVASCRIPT/FRONT-END 2022Q3 (JavaScript)
        </a>
      </Description>
      <Description $flex="flex" $gap="8px">
        THE ROLLING SCOPES SCHOOL |
        <a href="https://app.rs.school/certificate/jgt5oh61" target="_blank">
          JS/FE PRE-SCHOOL 2022Q2 (JavaScript)
        </a>
      </Description>
    </WrapperSection>
  );
}

export default Certificate;
