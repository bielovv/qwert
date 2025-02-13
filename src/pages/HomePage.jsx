import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/valentine"); 
  };

  return (
    <div className="container">
      {!showVideo ? (
        <button className="btn" onClick={() => setShowVideo(true)}>
          Start
        </button>
      ) : (
        <video
          className="fullscreen-video"
          autoPlay
          onEnded={handleVideoEnd}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            objectFit: "cover", 
            zIndex: "10",
          }}
        >
          <source src="/assets/custom-video.mp4" type="video/mp4" />
          {/*Replace "custom-video.mp4" with your own video file */}
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default HomePage;
