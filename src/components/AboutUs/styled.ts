import styled from "styled-components";


export const About = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 20px;
  background-color: #e9e9e945;
`;

export const LeftSide = styled.div`
display: flex;
flex-direction: column;
`;
export const RightSide = styled.div`
display: flex;

`;
export const TitleName = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Role = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
export const ListContact = styled.ul`
margin: 50px 0 ;
display: flex;
flex-direction: column;
gap: 10px;
`;
export const Item = styled.li`
  display: flex;
  gap: 8px;
`;
export const Contact = styled.p`
  font-weight: 700;
`;
export const ContactValue = styled.a`
  color: black;
`;

export const WrapperImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
`;

