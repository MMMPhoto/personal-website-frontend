import MediaQuery from "react-responsive"
import {
  HeaderBar,
  Title,
  NavBar,
  NavElem
} from "./styles";


const Header = () => {
  return (
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
              <NavElem to="/Photography">
                Photography
              </NavElem>
              <NavElem to="/Contact">
                Contact
              </NavElem>
            </NavBar>
          </MediaQuery>
          <MediaQuery maxWidth={900} >
            <p>menu icon</p>
          </MediaQuery>
    </HeaderBar>
  )
};

export default Header;
