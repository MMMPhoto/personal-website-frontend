// import MediaQuery from "react-responsive";
import { AppSizeListener } from "@react-md/utils";
import { DropdownMenu, MenuItem } from "@react-md/menu";
import { MenuSVGIcon } from "@react-md/material-icons";
import { useNavigate } from "react-router-dom";
import mmmLogo from "../../assets/images/MMM-new-logo.png";
import {
  HeaderBar,
  Title,
  TitleDiv,
  MediaDiv,
  // NavBar,
  // NavElem
} from "./styles";


const Header = () => {
  const navigate = useNavigate();

  return (
    <AppSizeListener>
      <HeaderBar>
        <TitleDiv>
          <Title>
            MAX MCDONOUGH
          </Title>
          <MediaDiv style={{}}>
            <img src={mmmLogo} style={{width: "150px"}} />
          </MediaDiv>
        </TitleDiv>
        {/* <MediaQuery minWidth={901} > */}
        {/* </MediaQuery> */}
        {/* <MediaQuery maxWidth={900} > */}
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
          <MenuItem onClick={() => (window.location.href = "https://www.waxmell.com")}>
            Photography
          </MenuItem>
          <MenuItem onClick={() => navigate("/Videography")}>
            Videography
          </MenuItem>
          <MenuItem onClick={() => navigate("/Contact")}>
            Contact
          </MenuItem>
        </DropdownMenu>
        {/* </MediaQuery> */}
      </HeaderBar>
    </AppSizeListener>
  )
};

export default Header;
