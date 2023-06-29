// import { CardHeader, CardTitle } from "@react-md/card";
// import { AboutContainer, AboutCard, AboutContent } from "./styles";
import { PageContainer } from "./styles";


const Videography = () => {

  return (
    <PageContainer>
      <h3>Videography</h3>
      <iframe src="https://player.vimeo.com/video/311981990" 
        // webkitallowfullscreen="" 
        // mozallowfullscreen="" 
        // allowfullscreen="" 
        width={560} 
        height={314} 
        // frameborder="0"
        ></iframe>
      <p>Aerial video reel</p>
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FReturningTheFavor%2Fvideos%2F2045985955672664%2F&show_text=false&width=560&t=0" 
        title='a facebook video of an episode of the show "Returning the Favor"'
        width={560} 
        height={314}
        style={{ border: "none", overflow: "hidden" }}
        // scrolling="no" 
        // frameborder="0" 
        // allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture full; web-share;" 
      ></iframe>
      <p>All Aerial Photography by Max McDonough</p>
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FReturningTheFavor%2Fvideos%2F2049538861984040%2F&show_text=false&width=560&t=0"
        title='a facebook video of an episode of the show "Returning the Favor"'
        width={560} 
        height={314}
        style={{ border: "none", overflow: "hidden" }}
        // scrolling="no" 
        // frameborder="0" 
        // allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture full; web-share;" 
      ></iframe>
      <p>All Aerial Photography by Max McDonough</p>
    </PageContainer>
  )
};

export default Videography;
