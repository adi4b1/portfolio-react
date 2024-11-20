import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="projectSecLabel">
        <div className="forskillLabel">
          <h3 className="headingLabel">Projects</h3>
        </div>
      </div>
      <div className="projects">
        <div className="projectchild">
          <a href="https://react-adi-moviedb.vercel.app/" target="_blank">
            <h5>MovieDatabase</h5>
          </a>
          <ul className="ulBody">
            <li>
              Fetched and displayed movie data from the TMDB API, showcasing movie details dynamically.
            </li>
            <li>
            Implemented individual movie and person detail pages, dynamically rendering information based on unique movie and person IDs and display videos based on movie ids
            </li>
            
          </ul>
        </div>

        <div className="projectchild">
          <a href="https://ekart-react-three.vercel.app/" target="_blank">
            <h5>EkartInfo</h5>
          </a>
          <ul className="ulBody">
            <li>
            Fetched and displayed Products data from the fakestore API, showcasing products details dynamically.
And display products based on the product Id. Filtering based on the product types and prices.

            </li>
           
          </ul>
        </div>


        <div className="projectchild">
          <a href="https://adi4b1.github.io/resumebuilder/" target="_blank">
            <h5>ResumeBuilder</h5>
          </a>
          <ul className="ulBody">
            <li>
              In this project I implemented a resume maker website, using
              JavaScript DOM href update the content dynamically and include
              download feature href download the resume.
            </li>
          </ul>
        </div>

        <div className="projectchild">
          <a href="https://adi4b1.github.io/character-Info/" target="_blank">
            <h5>CharacterInfo</h5>
          </a>
          <ul className="ulBody">
            <li>
              This project is describing the keyboard buthrefn character
              information when the key is pressed, the information is displayed
              dynamically without reloading the page
            </li>
          </ul>
        </div>

        <div className="projectchild">
          <a href="https://weatherreport-silk.vercel.app/" target="_blank">
            <h5>WeatherInfo</h5>
          </a>
          <ul className="ulBody">
            <li>
              This project describe that the current weather information based
              on their city names
            </li>
          </ul>
        </div>
        <div className="projectchild">
          <a href="https://adimoviedb.vercel.app/" target="_blank">
            <h5>MovieDatabase</h5>
          </a>
          <ul className="ulBody">
            <li>
              In this project I fetch the data from the TMDB movie Api and
              display the results in the website and also display the current
              user geolocation based on the geolocation JavaScript API.
            </li>
            <li>
              And also displayed the individual movies based on their ID as well
              as display the person details also based on their ID.
            </li>
          </ul>
        </div>


        
        {/* <div className="projectchild">
          <h5>CharacterInfo</h5>
        </div>
        <div className="projectchild">
          <h5>CharacterInfo</h5>
        </div>
        <div className="projectchild">
          <h5>CharacterInfo</h5>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
