import styled from "styled-components";
interface ContainerProps {
  $display?: string;
  $justifyContent?: string;
  $color?: string;
  $borderRadius?: string;
  $padding?: string;
}

export const Main = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: 900px;
  display: ${({$display})=> $display};
  padding: ${({$padding})=> $padding};
  justify-content: ${({$justifyContent})=> $justifyContent};
  background-color: ${({$color})=> $color};
  border-radius: ${({$borderRadius})=> $borderRadius};
`;