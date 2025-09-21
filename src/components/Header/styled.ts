import styled from "styled-components";

// interface PrimaryButtonContainerProps {
//   $width?: string;
//   $widthPhone?: string;
//   $padding?: string;
//   $margin?: string;
//   $marginPhone?: string;
//   $background?: string;
//   $color?: string;
//   $fontSize?: string;
//   $fontWeight?: string;
//   $fontFamily?: string;
//   $borderRadius?: string;
//   $border?: string;
//   $opacity?: string;
// }

export const ToggleButton = styled.button`
  border: none;
  outline: none;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #dedede;
  transition: background-color 0.6s ease, color 0.6s ease;
  @media (hover: hover) {
    &:hover {
      background-color: #585555ff;
      color: white;
    }
  }
`;
export const LogoImage = styled.img`
  width: 80px;
  height: 40px;
`;
export const LogoWrapper = styled.a`
  border: none;
  outline: none;
  text-decoration: none;
  color: black;
`;
export const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
`;
export const WrapperHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
`;
// export const PrimaryButtonContainer = styled.button<PrimaryButtonContainerProps>`
//   border: none;
//   outline: none;
//   font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '15px')};
//   font-family: ${({ $fontFamily }) => ($fontFamily ? $fontFamily : 'Inter')};
//   font-weight:${({ $fontWeight }) => ($fontWeight ? $fontWeight : '600')};
//   background: ${({ $background }) =>
//     $background
//       ? $background
//       : 'linear-gradient(90deg, #a32b54 0%, #2c255e 100%)'};
//   background-position: left center;
//   background-size: 100% 100%;
//   border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '8px')};
//   transition:
//     background-position 0.4s ease,
//     background-size 0.4s ease;
//   width: ${({ $width }) => $width};
//   padding: ${({ $padding }) => ($padding ? $padding : '5px 10px')};
//   color: ${({ $color }) => ($color ? $color : 'white')};
//   margin: ${({ $margin }) => $margin};
//   cursor: pointer;
//   position: relative;
//   border: ${({ $border }) => $border};
//   @media (max-width: 720px) {
//     margin: ${({ $marginPhone }) => $marginPhone};
//     width: ${({ $widthPhone }) => $widthPhone};
//   }

//   overflow: hidden;
//   z-index: 1;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(90deg, #2c255e, #a32b54);
//     z-index: -1;
//     opacity: 0;
//     transition: opacity 0.6s ease;
//   }

//   @media (hover: hover) {
//     &:hover::before {
//       opacity: ${({ $opacity }) => $opacity ? $opacity : '1'};
//     }
//   }
// `;
