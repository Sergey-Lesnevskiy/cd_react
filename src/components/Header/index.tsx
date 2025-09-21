import { images } from "../../constants/images"
import { LogoImage, LogoWrapper, ToggleButton, WrapperButtons, WrapperHeader } from "./styled"


function Header() {

  return (
    <WrapperHeader>
      <LogoWrapper href="/">
      <LogoImage src={images.general.logo} alt={'logo'} />
      </LogoWrapper>
      <WrapperButtons>
      <ToggleButton>ru</ToggleButton>
      <ToggleButton>light</ToggleButton>
      </WrapperButtons>
    </WrapperHeader>
  )
}

export default Header