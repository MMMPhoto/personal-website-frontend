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
          Max McDonough
        </Title>          
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
    </HeaderBar>
  )
};

export default Header;
