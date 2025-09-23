
import {
ProfileStyle,
  SubTitleSection,
TitleSection
} from "./styled";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();
  return (
    <ProfileStyle>
      <TitleSection>{t("profileTitle")}</TitleSection>
      <SubTitleSection>{t("goal")}</SubTitleSection>
    
    </ProfileStyle>
  );
}

export default Profile;
