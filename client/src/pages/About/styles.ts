import { styled } from "styled-components";
import { Card, CardContent } from "@react-md/card";

export const PageContainer = styled.div`
  overflow: auto;
  margin: 20px auto; 
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; */
`;

export const AboutCard = styled(Card)`
  position: relative;
  margin: 0 auto;
  width: 90vw;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    width: 80vw;
  }
`;

export const AboutContent = styled(CardContent)`
  margin: 0 auto;
  width: 80%;
`;

export const TwoColumnResponsive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const TextParagraph = styled.p`
  width: 100%;
`;
