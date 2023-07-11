import styled from "styled-components";
import { AppBar, AppBarTitle } from "@react-md/app-bar";
import { MediaContainer } from "@react-md/media";
import { NavLink } from "react-router-dom";

export const HeaderBar = styled(AppBar)`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  background-color: rgba(255,255,255,0.7);
  margin: 0px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-left: 3%;
  @media (min-width: 600px) {
    flex-direction: row;
    min-width: 28vw;
  }
`;

export const MediaDiv = styled(MediaContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  @media (min-width: 600px) {
    /* margin-left: 1%; */
  }
`;

export const Title = styled(AppBarTitle)`
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  margin-left: 0px;
  width: auto;
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
