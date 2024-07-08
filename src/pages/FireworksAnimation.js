import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js"; // Import anime.js library

const FireworksAnimation = () => {
  useEffect(() => {
    // Animation logic using anime.js
    const animation = anime({
      targets: ".firework",
      translateX: () => anime.random(-100, 100),
      translateY: () => anime.random(-100, 100),
      scale: () => anime.random(1, 4),
      rotate: () => anime.random(-180, 180),
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 1000,
      delay: anime.stagger(100),
      autoplay: true,
    });
  }, []);

  return (
    <div className="fireworks-container">
      {/* Firework elements */}
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
    </div>
  );
};

export default FireworksAnimation;
