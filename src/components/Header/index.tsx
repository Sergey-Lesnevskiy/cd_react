import { useTranslation } from "react-i18next";
import { LogoImage, LogoWrapper, ToggleButton, WrapperButtons, WrapperHeader } from "./styled";
import { images } from "../../constants/images";

function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <WrapperHeader>
      <LogoWrapper href="/">
        <LogoImage src={images.general.logo} alt="logo" />
      </LogoWrapper>
      <WrapperButtons>
        <ToggleButton  onClick={toggleLanguage} $width="40px">
          {i18n.language}
        </ToggleButton>
        <ToggleButton $width="70px">{t("theme")}</ToggleButton>
      </WrapperButtons>
    </WrapperHeader>
  );
}

export default Header;
