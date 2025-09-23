import { images } from "../../constants/images";
import {
  About,
  AboutImage,
  Contact,
  ContactValue,
  Item,
  LeftSide,
  ListContact,
  RightSide,
  Role,
  TitleName,
  WrapperImage,
} from "./styled";
import { useTranslation } from "react-i18next";

function AboutUs() {
   const { t } = useTranslation();
  return (
    <About>
      <LeftSide>
        <TitleName>{t("name")}</TitleName>
        <Role>{t("role")}</Role>
        <ListContact>
          <Item>
            <Contact>{t("phone")}</Contact> <ContactValue href="tel:+375292505053">+375292505053</ContactValue>
          </Item>
          <Item>
            <Contact>{t("mail")}</Contact> <ContactValue href="mailto:lesnevsky.sergey@gmail.com">lesnevsky.sergey@gmail.com</ContactValue>
          </Item>
          <Item>
            <Contact>{t("telegram")}</Contact> <ContactValue href="https://t.me/SergeyLesnevsky">@SergeyLesnevsky</ContactValue>
          </Item>
        </ListContact>
      </LeftSide>
      <RightSide>
        <WrapperImage>
          <AboutImage src={images.general.aboutImg} alt={"about img"} />
        </WrapperImage>
      </RightSide>
    </About>
  );
}

export default AboutUs;
