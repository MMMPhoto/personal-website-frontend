// import { CardHeader, CardTitle } from "@react-md/card";
// import { AboutContainer, AboutCard, AboutContent } from "./styles";
import { HeroLinksContainer, TextBlock, HeroLink } from "./styles";

const Videography = () => {

  return (
    <HeroLinksContainer>
      <TextBlock 
        type="headline-3"
      >
        <HeroLink href="/Software">SOFTWARE</HeroLink>
        <HeroLink href="/Photography">PHOTOGRAPHY</HeroLink>
        <HeroLink href="/Videography">VIDEO</HeroLink>
      </TextBlock>
      {/* <TextBlock>Video</TextBlock>
      <TextBlock>Photography</TextBlock> */}
    </HeroLinksContainer>
  )
};

export default Videography;
