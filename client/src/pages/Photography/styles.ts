import { styled } from "styled-components";
import { Card, CardContent } from "@react-md/card";

export const PageContainer = styled.div`
  overflow: auto;
  margin: 20px auto; 
`;

export const PhotoCard = styled(Card)`
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

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const TextParagraph = styled.p`
  width: 80%;
`;
