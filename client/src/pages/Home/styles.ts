import { styled } from "styled-components";
import { Typography } from "@react-md/typography";


// export const PageContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100vw;
// `;

export const HeroLinksContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 80vw;
  height: 80vw;
`;

export const TextBlock = styled(Typography)`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
`;

export const HeroLink = styled.a`
  display: block;
  /* font-family: Arial, Helvetica, sans-serif; */
  font-weight: 500;
  text-decoration: none;
  color: #000;
  margin-bottom: 20px;
  &:focus, &:hover {
    color: #fff;
  }
  &:hover {
    transition: .32s ease-in-out;
  }
`;
