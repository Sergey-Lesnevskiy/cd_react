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

function AboutUs() {
  return (
    <About>
      <LeftSide>
        <TitleName>Name</TitleName>
        <Role>Frontend</Role>
        <ListContact>
          <Item>
            <Contact>tel:</Contact> <ContactValue href="tel:+375292505053">+375292505053</ContactValue>
          </Item>
          <Item>
            <Contact>mail:</Contact> <ContactValue href="mailto:lesnevsky.sergey@gmail.com">lesnevsky.sergey@gmail.com</ContactValue>
          </Item>
          <Item>
            <Contact>telegram:</Contact> <ContactValue href="https://t.me/SergeyLesnevsky">@SergeyLesnevsky</ContactValue>
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
