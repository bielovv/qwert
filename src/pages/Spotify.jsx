import React, { useState } from "react";
import "../styles/spotify.css";

  // Example song list. Add or replace songs with your own.
const songs = [
  { name: "Любімая", image: "/assets/song1.jpg", audio: "/assets/song1.mp3" }, 
  { name: "Люблю", image: "/assets/song2.jpg", audio: "/assets/song2.mp3" },
  { name: "Тібя", image: "/assets/song3.jpg", audio: "/assets/song3.mp3" },
];

const Spotify = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audio] = useState(new Audio());

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePlay = () => {
    audio.src = songs[currentIndex].audio;
    audio.play();
  };

  // Pictures displayed in the circle.
  // Replace "/assets/me.jpg" and "/assets/you.jpg" with your own images.
  // Change the names "me" and "you" as needed.
  return (
    <>
      <div className="photo-container">
        <div className="photo-box">
          <img src="/assets/me.jpg" alt="me" className="photo" />
          <p className="photo-name">Жабеня</p> {}
        </div>
        <div className="plus-sign">+</div>
        <div className="photo-box">
          <img src="/assets/you.jpg" alt="you" className="photo" />
          <p className="photo-name">Кісь кіся</p>
        </div>
      </div>
      <div className="song-list">
        <div className="song-card" onClick={handlePlay}>
          <img src={songs[currentIndex].image} alt={songs[currentIndex].name} className="song-image" />
          <p className="song-name">{songs[currentIndex].name}</p>
        </div>
      </div>
      <div className="button-container">
        <button className="nav-button" onClick={handlePrev}>&lt;</button>
        <button className="nav-button" onClick={handleNext}>&gt;</button>
      </div>
    </>
  );
};

export default Spotify;
