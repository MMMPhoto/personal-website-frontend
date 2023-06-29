// import { CardHeader, CardTitle } from "@react-md/card";
// import { AboutContainer, AboutCard, AboutContent } from "./styles";
import bravoLogo from "../../assets/logos/Bravo_logo_2002.png";
import vh1Logo from "../../assets/logos/VH1_logo.svg.png";
import { PageContainer, LogoContainer, TextParagraph } from "./styles";


const Videography = () => {

  return (
    <PageContainer>
      <h3>Videography</h3>
      <LogoContainer>
        <img style={{width: "100px", margin: "20px"}} src={bravoLogo} alt="Bravo TV logo" />
        <img style={{width: "100px", margin: "20px"}} src={vh1Logo} alt="VH1 TV logo" />
        <img style={{width: "100px", margin: "20px"}} src={bravoLogo} alt="Bravo TV logo" />
        <img style={{width: "100px", margin: "20px"}} src={vh1Logo} alt="VH1 TV logo" />
        <img style={{width: "100px", margin: "20px"}} src={bravoLogo} alt="Bravo TV logo" />
        <img style={{width: "100px", margin: "20px"}} src={vh1Logo} alt="VH1 TV logo" />
      </LogoContainer>
      <TextParagraph>Over 15 years of experience in the Film and Television industry, working with many of the most established production companies, networks, and studios.</TextParagraph>
      <h4>Aerial video reel</h4>
      <iframe src="https://player.vimeo.com/video/311981990" 
        // webkitallowfullscreen="" 
        // mozallowfullscreen="" 
        // allowfullscreen="" 
        width={560} 
        height={314} 
        // frameborder="0"
        ></iframe>
      <h4>Featured Aerial Content</h4>
      {/* <h5>All Aerial Photography by Max McDonough</h5> */}
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FReturningTheFavor%2Fvideos%2F2045985955672664%2F&show_text=false&width=560&t=0" 
        title='a facebook video of an episode of the show "Returning the Favor"'
        width={560} 
        height={314}
        style={{ border: "none", margin: "10px", overflow: "hidden" }}
        // scrolling="no" 
        // frameborder="0" 
        // allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture full; web-share;" 
      ></iframe>
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FReturningTheFavor%2Fvideos%2F2049538861984040%2F&show_text=false&width=560&t=0"
        title='a facebook video of an episode of the show "Returning the Favor"'
        width={560} 
        height={314}
        style={{ border: "none", margin: "10px", overflow: "hidden" }}
        // scrolling="no" 
        // frameborder="0" 
        // allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture full; web-share;" 
      ></iframe>
    </PageContainer>
  )
};

export default Videography;
