import styled from "styled-components";


interface ToggleButtonProps {
  $width?: string;
  $theme?: string;
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  border: none;
  outline: none;
  padding: 0px 12px;
  width: ${({ $width }) => $width};
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

export const LogoWrapper = styled.a`
  border: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;
export const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
`;
export const WrapperHeader = styled.header`
  padding: 10px 0;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

