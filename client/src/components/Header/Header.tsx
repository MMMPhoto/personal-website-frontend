import MediaQuery from "react-responsive";
import { AppSizeListener } from "@react-md/utils";
import { DropdownMenu, MenuItem } from "@react-md/menu";
import { MenuSVGIcon } from "@react-md/material-icons";
import { useNavigate } from "react-router-dom";
import {
  HeaderBar,
  Title,
  NavBar,
  NavElem
} from "./styles";


const Header = () => {
  const navigate = useNavigate();

  return (
    <AppSizeListener>
      <HeaderBar>
      <Title>
        MAX MCDONOUGH
      </Title>
        <MediaQuery minWidth={901} >
          <NavBar>
            <NavElem to="/" end>
              Home
            </NavElem>
            <NavElem to="/About">
              About
            </NavElem>
            <NavElem to="/Software">
              Software
            </NavElem>
            <NavElem to="/Videography">
              Videography
            </NavElem>
            <NavElem to="/Contact">
              Contact
            </NavElem>
          </NavBar>
        </MediaQuery>
        <MediaQuery maxWidth={900} >
          <DropdownMenu id="dropdown-menu" buttonType="icon" buttonChildren={<MenuSVGIcon />}>
            <MenuItem onClick={() => navigate("/")}>
              Home
            </MenuItem>
            <MenuItem onClick={() => navigate("/About")}>
              About
            </MenuItem>
            <MenuItem onClick={() => navigate("/Software")}>
              Software
            </MenuItem>
            <MenuItem onClick={() => navigate("/Videography")}>
              Videography
            </MenuItem>
            <MenuItem onClick={() => navigate("/Contact")}>
              Contact
            </MenuItem>
          </DropdownMenu>
        </MediaQuery>
      </HeaderBar>
    </AppSizeListener>
  )
};

export default Header;
