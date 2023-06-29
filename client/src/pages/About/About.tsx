// import { CardHeader, CardTitle } from "@react-md/card";
// import { AboutContainer, AboutCard, AboutContent } from "./styles";
import maxAtTybee from "../../assets/images/Max_at_Tybee.jpg";
import cameraDollyRocksHawaii from "../../assets/images/Camera-Dolly-Rocks-Hawaii.jpeg";
import familyPhotoAquarium from "../../assets/images/Family_photo_Aquarium.png";
import { PageContainer, TextParagraph } from "./styles";

const About = () => {

  return (
    <PageContainer>
      <h3>About</h3>
      {/* PROFESSIONAL HEADSHOT */}
      <img style={{width: "30%"}} src={maxAtTybee} alt="Max at the Beach" />
      <TextParagraph>As a creative thinker who is always learning, I love doing and building things myself, whether it’s home renovation projects, films, or websites.</TextParagraph>
      <TextParagraph>I’ve always been passionate about storytelling, which first led me to filmmaking. After earning a Bachelor’s in Film and Digital Media from Georgia State University, I spent several years freelancing in nearly every craft in the film and television industry in Atlanta, eventually focusing on the Camera Department. Working as a Camera Operator and later a Drone pilot, I honed my photographic skills learning to keep up with ever-changing technologies.</TextParagraph>
      {/* PHOTO WORKING ON FILM PROJECT */}
      <img style={{width: "30%"}} src={cameraDollyRocksHawaii} alt="Professional video camera on a dolly on a Hawaiian beach" />
      <TextParagraph>Like many people, I spent a lot of time at home during the covid-19 pandemic, refocusing and reassessing. I started a garden, renovated my kitchen, and started teaching myself web development. After several years customizing wordpress sites, I wanted to learn the basics from the ground up. I later completed a bootcamp in Full Stack Development at Georgia Tech, specializing in Javascript ES6+, React, NodeJs, and RESTful APIs. </TextParagraph>
      {/* PHOTO - FAMILY */}
      <img style={{width: "30%"}} src={familyPhotoAquarium} alt="Max and his family" />
      <TextParagraph>Since graduating from the bootcamp I have expanded into new languages and frameworks. I learned Python and Typescript, and I have integrated mapping into numerous projects with the Javascript Maps API. In a world of ever changing technology, it’s important to realize that you will always be learning something new.</TextParagraph>
      <TextParagraph>In my free time, I enjoy spending time with my daughter Sidney and partner Sarah. I also love playing music and long exposure photography.</TextParagraph>
    </PageContainer>
  )
};

export default About;
