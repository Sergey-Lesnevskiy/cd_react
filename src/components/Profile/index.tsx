import {
  Description,
  LikeButton,
  SubTitleSection,
  TitleSection,
  WrapperSection,
} from "./styled";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  return (
    <WrapperSection>
      <TitleSection>{t("profileTitle")}</TitleSection>
      <SubTitleSection>{t("goal")}</SubTitleSection>
      <Description>{t("descriptionProfile")}</Description>
      <Description $flex="flex" $gap="8px">
        GitHub:
        <a href="https://github.com/Sergey-Lesnevskiy">
          https://github.com/Sergey-Lesnevskiy
        </a>
      </Description>
      <Description $flex="flex" $gap="8px">
        {t("linkCV")}{" "}
        <a href="https://docs.google.com/document/d/13YhZ8iOzohgFskXRSdVwzD5-Xjh_8HdMaMzFA9C5QRU/edit">
          docs.google.com.
        </a>
      </Description>
      <Description $flex="flex" $gap="8px">
        {t("dowlandCV")}
        <LikeButton href="/CV.docx" download="Sergey_CV.docx">СV.</LikeButton>
      </Description>
    </WrapperSection>
  );
}

export default Profile;
