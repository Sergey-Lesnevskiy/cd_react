import styled from "styled-components";

interface DescriptionProps {
  $flex?: string;
  $gap?: string;
  $margin?: string;
}

export const WrapperSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
  padding: 15px 8px;
  border-radius: 20px;
  background-color: #e9e9e945;
`;

export const TitleSection = styled.h3`

  font-size: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #0000001f;

`;
export const LikeButton = styled.a`

border: none;
  outline: none;
  padding: 0px 12px;
  border-radius: 8px;
  background: #e9e9e945;
  color: ${({ theme }) => theme.text};
  transition: background-color 0.6s ease, color 0.6s ease;
  @media (hover: hover) {
    &:hover {
      background-color: #585555ff;
      color: white;
    }
  }

`;

export const SubTitleSection = styled.h4`
  padding: 10px 0;
  font-size: 20px;

`;

export const Description = styled.p<DescriptionProps>`
  white-space: pre-wrap;
  padding-left: 20px;
  display: ${({ $flex }) => $flex};
  gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => $margin};
  line-height: 1.5;
  @media(max-width: 720px){
    padding-left: 10px;
  }
  @media(max-width: 420px){
    flex-direction: column;
    gap: 0;
    margin: 5px 0;
  }
`;

