import React, { useEffect, useRef } from "react";
import image from "../images/adi.jpeg";
import { API_URL } from "./api";
// import OpenModal from '../OpenModal'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const Info = () => {
  const [location,setlocation]=useState(
    localStorage.getItem('location') || ""
  )
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
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
          localStorage.setItem('location',location)
        console.log("locationname", location);
        await fetch(`${API_URL}/location/add-location`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location: location }),
        });
      } catch (err) {
        console.error("Failed to fetch location name:", err);
      }
    });
  }, []);
  const getText = useRef(null);
  window.addEventListener("scroll", function (e) {
    // console.log('scrollY',window.scrollY)
    // console.log('innerHeight',window.innerHeight)
    // console.log('totaldocu',document.documentElement.scrollHeight)
    if (window.innerHeight) {
      // console.log(e);
    }
  });

  useEffect(() => {
    let count = 0;

    if (getText.current) {
      let outtext = `
      Hi, I am Adikesavulu Mitnala. I work as a Software Engineer.
      `;
      // let data=getText.current.textContent
      // getText.current.style.display="none"
      const animFunc = () => {
        let res = outtext.slice(0, count);
        getText.current.textContent = res;

        count++;
      };
      // console.log(getText.current.textContent);
      setInterval(animFunc, 100);
    }
  }, []);
  return (
    <div className="infoBody">
      <div className="forText">
        <h1 ref={getText} className="forH1"></h1>
      </div>
      <div>
        {/* <img src='/src/images/adi.jpeg' alt="adipic" /> */}
        <img src={image} alt="pic" className="forImage" />
      </div>
      {/* <OpenModal/> */}
    </div>
  );
};

export default Info;
