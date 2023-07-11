import styled from "styled-components";
import { AppBar, AppBarTitle } from "@react-md/app-bar";
import { MediaContainer } from "@react-md/media";
import { NavLink } from "react-router-dom";

// export const HeaderBar = styled.header`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   background-position: center;
//   background-color: #FFF;
//   width: 100%;
//   @media (min-width: 600px) {
//     flex-direction: row;
//   }
// `;

export const HeaderBar = styled(AppBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  border-radius: 10px;
  background-color: #FFF;
  margin: 0px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-left: 3%;
`;

export const MediaDiv = styled(MediaContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;


// export const Title = styled.h1`
//   color: #000;
//   font-size: clamp(16px, 8vw, 30px);
//   font-weight: normal;
//   opacity: 90%;
//   width: 80%;
//   @media (min-width: 600px) {
//     flex-direcion: row;
//   }
// `;

export const Title = styled(AppBarTitle)`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  margin-left: 0px;
  position: relative;
  color: #000;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 300px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 40%;
  }
`;

export const NavElem = styled(NavLink)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #8282fe;
  }
`;

export const Subtitle = styled(AppBarTitle)`
  display: none;
  margin: 5px;
  color: #000;
  @media (min-width: 600px) {
    display: inline;
  }
`;
