import { useTranslation } from "react-i18next";
import { LogoWrapper, ToggleButton, WrapperButtons, WrapperHeader } from "./styled";
import { IconLogo } from "../../assets/images/Logo";
import { Container } from "../../App";

export interface HeaderProps {
  toggleTheme: () => void;
  currentTheme?: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ toggleTheme , currentTheme}) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <WrapperHeader>
      <Container $display="flex" $justifyContent="space-between" $borderRadius="20px" $color="#e9e9e945" $padding="8px"> 
        
      <LogoWrapper href="/">
        <IconLogo color={currentTheme !== "light" ? "#FFF": "#111111"}/>
      </LogoWrapper>
      <WrapperButtons>
        <ToggleButton  onClick={toggleLanguage} $width="40px">
          {i18n.language}
        </ToggleButton>
        <ToggleButton onClick={toggleTheme} $width="70px">{t("theme")}</ToggleButton>
      </WrapperButtons>
      </Container>
    </WrapperHeader>
  );
}

export default Header;
