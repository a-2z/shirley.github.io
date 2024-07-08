import React, { useEffect } from "react";
import Vara from "vara";
import "../styles/styles.css";

function ShirleyText() {
  useEffect(() => {
    new Vara(
      "#shirley-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Shirley",
          textAlign: "center",
          fontSize: 80,
          strokeWidth: 4,
          delay: 3500,
          duration: 3100,
          y: 20,
        }
      ]
    );
  }, []);

  return (
    <div id="shirley-container" padding-top="100px" className="glowing-text"></div>
  );
}

export default ShirleyText;
