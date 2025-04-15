import React from 'react';

import { useEffect, useState } from "react";
import {API_URL} from './api'
import { Link } from "react-router-dom";
import "../App.css";
import { AtSign, X } from "lucide-react";
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const Nav = ({ InfoRef, skillRef, projectRef, experienceRef }) => {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);
  const [progress, setProgress] = useState(0);
  const modalHandler = () => {
    setModal(!modal);
  };

    const [locname,setlocation]=useState(
      localStorage.getItem('location') || ""
    )
    // const hasPostedLoc=useRef(false)
  
    const getLocationFromClick=async()=>{
      window.scrollTo({
        top:20,
        behavior:'smooth'
      })
      navigator.geolocation.getCurrentPosition(
        async (position) => {
        const { latitude, longitude } = position.coords;
  
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          console.log("data", data);
          const location =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Unknown";
            setlocation(location)
            localStorage.setItem('location',location)
          console.log("locationname", location);
         
          // if(!hasPostedLoc.current){
            await fetch(`${API_URL}/location/add-location`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ location }),
            });
            localStorage.setItem('locationPosted', 'true');
          // }
          
       
        } catch (err) {
          console.error("Failed to fetch location name:", err);
        }
      });
      (error) => {
        console.error("Geolocation error:", error);
      }
    }
    useEffect(() => {
      const isPosted=localStorage.getItem('locationPosted')
      if(isPosted||locname)return;
      getLocationFromClick()
    }, []);

  const scrollPosition = () => {
    const totalScrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / totalScrollableHeight) * 100;
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollPosition);

    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  }, []);
  const scrollToSection = (ref, section) => {
    ref.current.scrollIntoView(ref);
    setActive(section);
  };
  const closeopenModal = () => {
    setModal(false);
  };
  // console.log('progress',progress,typeof progress);

  return (
    <div className="navbarit">
      <ul className="navulit">
        <div className="forParentNav">
          <div className="forChildNav">
            <li
              className={`li-items ${active === "home" ? "active-li" : ""}`}
              onClick={() => scrollToSection(InfoRef, "home")}
            >
              <h6>Home</h6>
            </li>
            <li
              className={`li-items ${active === "skills" ? "active-li" : ""}`}
              onClick={() => scrollToSection(skillRef, "skills")}
            >
              <h6>Skills</h6>
            </li>
            <li
              className={`li-items ${active === "projects" ? "active-li" : ""}`}
              onClick={() => scrollToSection(projectRef, "projects")}
            >
              <h6>Projects</h6>
            </li>

            <li
              className={`li-items ${
                active === "experience" ? "active-li" : ""
              }`}
              onClick={() => scrollToSection(experienceRef, "experience")}
            >
              <h6>Experience</h6>
            </li>
            <li className="li-items" onClick={modalHandler}>
              <h6 onClick={()=>getLocationFromClick()}>
                <AtSign />
              </h6>
            </li>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={progress}
            aria-valuemin="1"
            aria-valuemax="100"
            style={{ height: "5px", width: "100%" }}
          >
            <div
              className="progress-bar"
              style={{ width: `${progress}%`, transition: "width 0.2s ease" }}
            >
              {/* <small>{Math.round(progress)}</small> */}
            </div>
          </div>
        </div>
      </ul>
      {modal && (
        <section>
          <div className="forModal">
            <div className="forinsideModal">
              <button className="closeModal" onClick={closeopenModal}>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg> */}
                <X />
              </button>
              {/* <hr /> */}
              <div className="addInfo">
                <div className="foraddIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <div>
                  <h6>m.adi9000818565@gmail.com</h6>
                </div>
              </div>

              <div className="addInfo">
                <div className="foraddIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>
                <div>
                  <h6>+919704153130</h6>
                </div>
              </div>

              <div className="addInfo">
                <div className="foraddIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </div>
                <div>
                  <h6>
                    <a href="https://github.com/adi4b1" target="__blank">
                      Github
                    </a>
                  </h6>
                </div>
              </div>

              <div className="addInfo">
                <div className="foraddIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <div>
                  <h6>
                    <a
                      href="https://www.linkedin.com/in/adikesavulu-mitnala"
                      target="__blank"
                    >
                      Linkedin
                    </a>
                  </h6>
                </div>
              </div>

              <div className="addInfo">
                <div className="foraddIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </div>
                <div>
                  <h6>Bengaluru</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Nav;
