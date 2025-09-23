import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;