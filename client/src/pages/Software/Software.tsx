// import { CardHeader, CardTitle } from "@react-md/card";
// import { AboutContainer, AboutCard, AboutContent } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import adoptMeScreenshot from "../../images/Adopt-Me-Screenshot.png";
import socialApi from "../../images/Social-Media-API-Screenshot.png";
import jobSearchScreenshot from "../../images/job-search-automate-screenshot.png";
import viewFromHereScreenshot from "../../images/View-From-Here-screenshot.png";

const Software = () => {

  const portfolioItems = [
    {
        id: 1,
        name: "Weather App",
        description: "Website to search for weather forecast by city",
        skills: "Web APIs, Javascript, CSS, HTML",
        deploymentUrl: "https://mmmphoto.github.io/Weather-App/",
        githubRepo: "https://github.com/MMMPhoto/Weather-App",
        imgSrc: "https://raw.githubusercontent.com/MMMPhoto/Weather-App/main/assets/images/weather-dashboard-screenshot.png"
    },
    {
        id: 2,
        name: "Adopt Me",
        description: "Website to search for pets up listed for adoption",
        skills: "MVC, Node, Express, Sequelize, SQL",
        deploymentUrl: "https://adoptme.herokuapp.com/",
        githubRepo: "https://github.com/JasmineDaniels/AdoptMe",
        imgSrc: `${adoptMeScreenshot}`
    },
    {
        id: 3,
        name: "Event Finder",
        description: "Website to search for upcoming events by location and type",
        skills: "Web APIs, Javascript, CSS, HTML",
        deploymentUrl: "https://mmmphoto.github.io/Event-Finder/",
        githubRepo: "https://github.com/MMMPhoto/Event-Finder",
        imgSrc: "https://user-images.githubusercontent.com/70594281/174419344-26644f83-8f0c-4395-9b49-65ef8950d945.png"
    },
    {
        id: 4,
        name: "Social Media API",
        description: "Server-side framework to run the database and routing for a social media site",
        skills: "Node, Express, Mongoose, Mongo (server-side only)",
        deploymentUrl: "https://github.com/MMMPhoto/Social-Network-API",
        githubRepo: "https://github.com/MMMPhoto/Social-Network-API",
        imgSrc: `${socialApi}`
    },
    {
      id: 5,
      name: "Job Search Automate",
      description: "App to search and filter jobs from LinkedIn",
      skills: "Python, Regex, Web APIs",
      deploymentUrl: "https://github.com/MMMPhoto/job-search-automate",
      githubRepo: "https://github.com/MMMPhoto/job-search-automate",
      imgSrc: `${jobSearchScreenshot}`
    },
    {
        id: 6,
        name: "View From Here",
        description: "Website to search for and upload photos of interesting views based on location",
        skills: "MERN Full Stack (React, Mongo, NodeJS, Express), Google Maps API, Typescript",
        deploymentUrl: "https://view-from-here.herokuapp.com/",
        githubRepo: "https://github.com/MMMPhoto/View-From-Here-TS",
        imgSrc: `${viewFromHereScreenshot}`
    },
];

  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        {portfolioItems.slice(0).reverse().map((item) => (
          <div key={item.id}>
              <div>
                <img src={item.imgSrc} alt={item.name}></img>
              </div>
              <div>
                <h5>
                  <a href={item.deploymentUrl} target="_blank" rel="noreferrer">{item.name}</a>
                  <a href={item.githubRepo} target="_blank" rel="noreferrer"><AiFillGithub /></a>
                </h5>
                {/* {isMobile ? <></> : <p className="card-text text-center w-100 h-80 m-2 portfolio-desc">{item.skills}</p>}
                {isTablet ? <></> : <p className="card-text text-center w-100 h-80 m-2 portfolio-desc">{item.description}</p>} */}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Software;
