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
  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    setConfettiOn(true);
    const fadeTimer = setTimeout(() => setFadeOut(true), 7000);
    const offTimer = setTimeout(() => setConfettiOn(false), 9000);
    const buttonsTimer = setTimeout(() => setButtonsVisible(true), 8000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(offTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  const handleReset = () => {
    window.location.reload();
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
          {buttonsVisible && (
            <>
              <button
                className="secondary-button fade-in"
                onClick={handleReset}
                aria-label="Reset"
              >
                <FaRedo />
              </button>
              <a href="/allNotes" className="fade-in button-link">
                <button className="fade-in">Open</button>
              </a>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Happy Birthday, Shirley!</title>;
