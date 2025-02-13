import React, { useState, useEffect } from "react";
import "../styles/valentine.css";
import Spotify from "./Spotify";

// Add your own images in the assets folder. 
// Change the interval time as needed.
const images = Array.from({ length: 5 }, (_, i) => `/assets/img${i + 1}.jpg`); // Change length(# of images) as needed

const ValentinePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showNoButton, setShowNoButton] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleYesClick = () => {
    setShowVideo(true);
  };

  const handleRemoveNoButton = () => {
    setShowNoButton(false);
  };

  return (
    <div className="valentine-container">
      <div className="valentine-frame">
        <div className="valentine-image-container">
          <img src={images[currentImageIndex]} alt="Valentine" className="valentine-image" />
        </div>
      </div>

      <Spotify />

      <h1 className="valentine-text">Will you be my Valentine? 💖</h1>
      
      {showVideo ? (
        <>
          <video 
            src="/assets/yesvid.mp4"  // Replace with a custom video 
            autoPlay 
            className="yes-video" 
            loop 
            muted  
            playsInline
          /> 
          <h1 className="valentine-text">Люлю кисю, с праздником ❤️</h1>  {/*Text displayed after the button "Yes" is clicked*/} 
        </>
      ) : (
        <div className="button-group">
          <button className="btn yes-btn" onClick={handleYesClick}>Yes</button>
          {showNoButton && (
            <button 
              className="btn no-btn" 
              onMouseEnter={(e) => e.target.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`}
            >No</button>
          )}
        </div>
      )}
      
      {!showVideo && (
        <button className="btn remove-no-btn" onClick={handleRemoveNoButton}>Remove No Button &lt;3</button>
      )}
    </div>
  );
};

export default ValentinePage;
