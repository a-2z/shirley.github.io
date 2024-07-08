import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { FaRedo } from "react-icons/fa";
import VaraText from "./VaraText";
import ShirleyText from "./ShirleyText";
import "../styles/styles.css";
import "../styles/animations.css";

const IndexPage = () => {
  const [confettiOn, setConfettiOn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false); // Initialize buttons visibility state to false

  useEffect(() => {
    setConfettiOn(true);
    const fadeTimer = setTimeout(() => setFadeOut(true), 7000);
    const offTimer = setTimeout(() => setConfettiOn(false), 9000);
    const buttonsTimer = setTimeout(() => setButtonsVisible(true), 8000); // Show buttons after 6 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(offTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  const handleReset = () => {
    window.location.reload(); // Reload the page to reset
  };

  return (
    <main>
      <div className="container">
        {confettiOn && (
          <div className={fadeOut ? "fade-out" : ""}>
            <Confetti />
          </div>
        )}
        <VaraText />
        <ShirleyText />
        <br />
        <div style={{ paddingTop: "40px" }}>
          {/* Conditionally render buttons based on buttonsVisible state */}
          {buttonsVisible && (
            <>
              <button
                className="secondary-button fade-in" // Add fade-in class directly for animation
                onClick={handleReset}
                aria-label="Reset"
              >
                <FaRedo />
              </button>
              <button className="fade-in">Open</button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Happy Birthday, Shirley!</title>;
